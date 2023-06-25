"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const PAGES_NOT_LOGGED_IN = [
  { text: "Login", href: "pages/login" },
]

const NavBar = ({isLoggedIn}) => {
  const PAGES = [
    { text: "Favourites", href: "pages/favourites" },
    { text: "Search", href: "pages/search" },
    { text: "Home", href: "/" },
    { text: "Logout", href: "pages/logout"},
  ];

  const [activePageId, setActivePageId] = useState(-1);
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <h1 className="logo">DI$COUNT FINDER</h1>
        </Link>
        <div className={`nav__menu-list`}>
          {(isLoggedIn ? PAGES : PAGES_NOT_LOGGED_IN).map((pg, id) => (
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
