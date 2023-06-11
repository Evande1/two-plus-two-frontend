import React from "react";
import Link from "next/link";

const NavItem = ({ href, text, active }) => {
  return (
    <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
};
export default NavItem;
