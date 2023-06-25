'use client';

// import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navigation/NavBar";
const inter = Inter({ subsets: ["latin"] });

import { auth } from '../auth/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, setUser)

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar isLoggedIn={user != null} />
        {children}
      </body>
    </html>
  );
}
