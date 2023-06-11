"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const PAGES = [
    { text: "Favourites", href: "pages/favourites" },
    { text: "Search", href: "pages/search" },
    { text: "Home", href: "/" },
  ];

  const [navBarActive, setNavBarActive] = useState(false);
  const [activePageId, setActivePageId] = useState(-1);
  return (
    <div className={`${navBarActive ? "active" : ""} nav__menu-list`}>
      {PAGES.map((pg, id) => (
        <div
          onClick={() => {
            setActivePageId(id);
            setNavBarActive(false);
          }}
          key={pg.text}
        >
          <NavItem active={activePageId === id} {...pg} />
        </div>
      ))}
    </div>
  );
};
export default NavBar;
