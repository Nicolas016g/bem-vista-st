/**

 * Rebuilds produtos/ + galeria/ from _import using highest-res sources.

 * Export: WebP q98, long edge up to 3840px (native when smaller — no fake upscale).

 */

import fs from "fs";

import path from "path";

import sharp from "sharp";



const ROOT = path.join(process.cwd(), "public", "images");

const IMPORT = path.join(ROOT, "_import", "produtos", "Produtos");

const OUT_PROD = path.join(ROOT, "produtos");

const OUT_GAL = path.join(ROOT, "galeria");

const OUT_BRAND = path.join(ROOT, "brand");

const MANIFEST = path.join(process.cwd(), "src", "lib", "media-manifest.json");



const MAX_LONG = 3840;

const GALLERY_PER_CATEGORY = 3;

const WEBP_QUALITY = 98;
/** Mantém a mesma foto do fundo do site (hero) ao reotimizar o catálogo */
const CATALOG_SOURCE_OVERRIDE = {
  "persiana-horizontal": "[done] IMG-20250717-WA0100.jpg",
};



function slugify(name) {

  return name

    .normalize("NFD")

    .replace(/\p{M}/gu, "")

    .replace(/\^/g, "")

    .replace(/\s+/g, "-")

    .replace(/[^\w-]/g, "")

    .toLowerCase();

}



function isImage(file) {

  return /\.(jpe?g|png|webp)$/i.test(file);

}



async function meta(file) {

  const m = await sharp(file).metadata();

  const w = m.width || 0;

  const h = m.height || 0;

  return {

    width: w,

    height: h,

    long: Math.max(w, h),

    area: w * h,

    orientation: m.orientation,

  };

}



async function exportPhoto(src, destWebp, { premium = false } = {}) {

  const { width: w, height: h, long, orientation } = await meta(src);

  const targetLong = long > MAX_LONG ? MAX_LONG : long;

  const isDownscale = targetLong < long;
  const quality = premium ? 100 : WEBP_QUALITY;
  const nearLossless = premium ? true : !isDownscale;



  let pipeline = sharp(src, { failOn: "none" }).rotate();



  if (isDownscale) {

    const scale = targetLong / long;

    const nw = Math.round(w * scale);

    const nh = Math.round(h * scale);

    pipeline = pipeline.resize(nw, nh, {

      fit: "fill",

      kernel: sharp.kernel.lanczos3,

    });

    pipeline = pipeline.sharpen({ sigma: 0.45, m1: 0.4, m2: 0.25 });

  }



  await pipeline

    .webp({

      quality,

      effort: 6,

      smartSubsample: false,

      nearLossless,

    })

    .toFile(destWebp);



  const out = await sharp(destWebp).metadata();

  return { width: out.width, height: out.height, sourceLong: long };

}



async function optimizeBrandPng(src, dest, minWidth = 1600) {

  const m = await sharp(src).metadata();

  let pipeline = sharp(src);

  if ((m.width || 0) < minWidth) {

    pipeline = pipeline.resize(minWidth, null, {

      fit: "inside",

      kernel: sharp.kernel.lanczos3,

      withoutEnlargement: false,

    });

  }

  await pipeline

    .png({ compressionLevel: 4, quality: 100, palette: false })

    .toFile(dest);

}



function clearDir(dir) {

  if (!fs.existsSync(dir)) return;

  for (const f of fs.readdirSync(dir)) {

    if (f === ".gitkeep") continue;

    fs.unlinkSync(path.join(dir, f));

  }

}



async function main() {

  if (!fs.existsSync(IMPORT)) {

    console.error("Import folder missing:", IMPORT);

    process.exit(1);

  }



  fs.mkdirSync(OUT_PROD, { recursive: true });

  fs.mkdirSync(OUT_GAL, { recursive: true });

  clearDir(OUT_PROD);

  clearDir(OUT_GAL);



  const catalog = [];

  const gallery = [];

  let galIndex = 0;



  const categories = fs

    .readdirSync(IMPORT, { withFileTypes: true })

    .filter((d) => d.isDirectory())

    .map((d) => d.name)

    .sort((a, b) => a.localeCompare(b, "pt-BR"));



  for (const catName of categories) {

    const slug = slugify(catName);

    const dir = path.join(IMPORT, catName);

    const files = fs

      .readdirSync(dir)

      .filter(isImage)

      .map((f) => path.join(dir, f));



    const ranked = await Promise.all(

      files.map(async (f) => {

        const m = await meta(f);

        return {

          path: f,

          ...m,

          done: /\[done\]/i.test(path.basename(f)),

        };

      }),

    );

    ranked.sort((a, b) => {

      if (b.long !== a.long) return b.long - a.long;

      if (b.area !== a.area) return b.area - a.area;

      if (a.done !== b.done) return a.done ? -1 : 1;

      return a.path.localeCompare(b.path);

    });



    if (!ranked.length) continue;



    const overrideName = CATALOG_SOURCE_OVERRIDE[slug];
    const heroSrc = overrideName
      ? path.join(dir, overrideName)
      : ranked[0].path;

    const prodDest = path.join(OUT_PROD, `${slug}.webp`);

    const dims = await exportPhoto(heroSrc, prodDest, {
      premium: slug === "persiana-horizontal",
    });

    catalog.push({

      slug,

      name: catName.replace(/\^/g, ""),

      image: `/images/produtos/${slug}.webp`,

      width: dims.width,

      height: dims.height,

      sourceLongEdge: dims.sourceLong,

    });



    const picks = ranked.slice(0, GALLERY_PER_CATEGORY);

    for (const pick of picks) {

      galIndex += 1;

      const galName = `${String(galIndex).padStart(2, "0")}-${slug}.webp`;

      const galDest = path.join(OUT_GAL, galName);

      const gDims = await exportPhoto(pick.path, galDest);

      const label = catName.replace(/\^/g, "");

      gallery.push({

        src: `/images/galeria/${galName}`,

        alt: `Instalação Bem Vista — ${label}`,

        label,

        width: gDims.width,

        height: gDims.height,

        sourceLongEdge: gDims.sourceLong,

      });

    }

  }



  const brandFiles = [

    "bv-mark.png",

    "bem-vista-lockup.png",

    "logo-bem-vista.png",

    "logo-icon.png",

  ];

  for (const name of brandFiles) {

    const src = path.join(OUT_BRAND, name);

    if (fs.existsSync(src)) {

      const tmp = path.join(OUT_BRAND, `_opt_${name}`);

      await optimizeBrandPng(src, tmp);

      fs.renameSync(tmp, src);

    }

  }



  const manifest = {

    catalog,

    galleryCount: gallery.length,

    gallery,

    export: {

      format: "webp",

      maxLongEdge: MAX_LONG,

      webpQuality: WEBP_QUALITY,

      nearLosslessOnNativeScale: true,

      note: "Sem upscale artificial — usa resolução nativa do melhor arquivo do acervo.",

    },

  };

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));



  console.log(

    `OK: ${catalog.length} produtos, ${gallery.length} galeria (WebP q${WEBP_QUALITY}, até ${MAX_LONG}px)`,

  );

}



main().catch((e) => {

  console.error(e);

  process.exit(1);

});


