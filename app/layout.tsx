import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Amaral | Engenheiro de Software",
  description:
    "Portfólio de Thiago Amaral, engenheiro de software com experiência em Java, Spring, AWS e desenvolvimento de sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
