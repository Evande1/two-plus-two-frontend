// import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navigation/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Di$count Finder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
