import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "./utilities.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import SiteShell from "../components/layout/SiteShell";
import { profile, siteUrl } from "../config/site.config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
