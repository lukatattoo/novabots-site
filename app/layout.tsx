import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NovaBots",
  description: "Automatizăm web-ul pentru tine – bots, AI, scraping, tot ce vrei.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen p-6 sm:p-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
