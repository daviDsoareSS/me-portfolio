import type { Metadata } from "next";
import Script from 'next/script'

import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio David Soares",
  description: "Seja muito bem vindo, me chamo David e tenho 20 anos, sou um desenvolvedor apaixonado por tecnologia, com experiência em PHP, Javascript, Laravel e técnicas de SEO para o Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />

        {children}

        <Script src="https://kit.fontawesome.com/639efb6961.js"></Script>

      </body>
    </html>
  );
}
