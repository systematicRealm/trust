import React from "react";
import logo from "./assets/logo.svg";

export default function Header() {
  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="absolute top-0 z-10 flex items-center justify-center w-full py-2 bg-neutral-50">
      <div className="flex items-center justify-between w-3/4">
        <div
          // onClick={scrollToTop}
          className="flex items-center justify-center w-10 transition-colors duration-300 hover:bg-neutral-200 rounded-full cursor-pointer"
        >
          <img className="w-full" src={logo} alt="trust logo" />
        </div>

        <div className="flex items-center justify-center gap-5 font-normal">
          {[
            { name: "Our Services", href: "#OurServices" },
            { name: "Our projects", href: "#OurProjects" },
            { name: "Why us", href: "#WhyUs" },
            { name: "Contact us", href: "#ContactUs" },
          ].map((item, index) => (
            <span key={index}>
              <a
                className="transition-colors duration-300 hover:bg-neutral-200 px-2 rounded-3xl cursor-pointer py-2"
                href={item.href}
              >
                {item.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
