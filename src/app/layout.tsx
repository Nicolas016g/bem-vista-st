import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bem Vista Persianas | São Carlos",
  description:
    "Persianas, toldos, rede de proteção e tela mosquiteira em São Carlos. Instalação profissional, manutenção, higienização e orçamento pelo WhatsApp.",
  keywords: [
    "Bem Vista",
    "persianas São Carlos",
    "toldos",
    "rede de proteção",
    "tela mosquiteira",
    "manutenção de persianas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
