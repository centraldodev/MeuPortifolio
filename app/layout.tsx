import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import AvisoTopo from "../components/layout/AvisoTopo";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { profile, siteUrl } from "../config/site.config";

// Títulos arredondados e texto corrido mais leve, no estilo da referência
const nunito = Nunito({
  variable: "--font-titulo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-texto",
  subsets: ["latin"],
});

const description =
  "Portfólio de Natanael Ramos, desenvolvedor web e mobile com React, Next.js, React Native e Node.js. Projetos publicados e 8 anos de experiência em infraestrutura de TI.";

export const metadata: Metadata = {
  // Só a origem: o Next já acrescenta o basePath (/MeuPortifolio) nas imagens geradas por arquivo
  metadataBase: new URL(new URL(siteUrl).origin),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/`,
    siteName: profile.name,
    title: `${profile.name} | ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${nunito.variable} ${nunitoSans.variable}`}>
        <a href="#conteudo" className="pular-link">
          Pular para o conteúdo
        </a>
        <AvisoTopo />
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
