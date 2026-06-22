import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Menu — RestoName",
  description: "Browse our menu and place your order",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
