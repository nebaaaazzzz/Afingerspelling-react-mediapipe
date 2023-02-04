import React from "react";
import { NavLink } from "react-router-dom";
function BackButton({ url, black = false }: { url: string; black?: boolean }) {
  return (
    <NavLink
      className={`font-bold z-50 text-5xl top-8 absolute left-16  ${
        black ? "text-black" : "text-white"
      }`}
      to={url}
    >
      &#8592;
    </NavLink>
  );
}

export default BackButton;
