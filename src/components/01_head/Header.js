import React from "react";
import logo from "./assets/logo.svg";

export default function Header() {
  return (
    <div className="absolute top-0 z-10 flex items-center justify-center w-full py-2 bg-neutral-50">
      <div className="flex items-center justify-between w-3/4">
        <div>
          <img className="w-10" src={logo} />
        </div>

        <div className="flex items-center justify-center gap-5 font-normal">
          <span>Why us</span>
          <span>Our Services</span>
          <span>Our projects</span>
          <span>Contact us</span>
        </div>
      </div>
    </div>
  );
}
