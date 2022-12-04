import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="container flex items-center justify-center w-full">
      <div className="flex justify-between w-3/4">
        <div>
          <img className="w-10" src={logo} />
        </div>

        <div>
          <span>Why us</span>
          <span>Our Services</span>
          <span>Our projects</span>
          <span>Contact us</span>
        </div>
      </div>
    </div>
  );
}
