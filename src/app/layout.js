import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel/Carousel";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Water Life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Header />
        <p>Ia te mandar msg ontem, mas não quis te acordar, hoje o bagulho deu uma fluída! </p>
        <Footer />
      </body>
    </html>
  );
}
