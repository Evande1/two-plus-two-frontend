"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import "src/app/globals.css";

const NavBar = () => {
  const PAGES = [
    { text: "Favourites", href: "pages/favourites" },
    { text: "Search", href: "pages/search" },
    { text: "Home", href: "/" },
  ];

  const [activePageId, setActivePageId] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <h1 className="logo">DI$COUNT FINDER</h1>
        </Link>
        <div className={`nav__menu-list`}>
          {PAGES.map((pg, id) => (
            <div
              onClick={() => {
                setActivePageId(id);
              }}
              key={pg.text}
            >
              <NavItem active={activePageId === id} {...pg} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
