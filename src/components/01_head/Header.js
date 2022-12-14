import React, { useEffect, useRef } from "react";
import logo from "./assets/logo.svg";
import "./Header.css";

export default function Header() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const header = useRef(null);
  useEffect(() => {
    // create a function to handle the scroll event
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 220) {
        // if the scroll is greater than 120px
        header.current.classList.add("bg-neutral-900"); // add the class to the header
        header.current.classList.remove("absolute"); // remove the class from the header to make it fixed (like floating on top of the page)
        header.current.classList.add("fixed"); // add fixed class to the header to make it fixed (like floating on top of the page)
      } else {
        // if the scroll is less than 120px
        header.current.classList.remove("bg-neutral-900"); // remove background color from the header
        header.current.classList.add("absolute"); // add the absolute class to the header
        header.current.classList.remove("fixed"); // remove fixed class from the header to make it absolute
      }
    };
    window.addEventListener("scroll", handleScroll); // initliaze the event listener and pass the function to handle the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll); // remove the event listener when the component is unmounted
    };
  }, []);

  const NavElementsStyles =
    "px-2 py-2 transition-colors duration-300 cursor-pointer hover:bg-neutral-200 rounded-3xl hover:text-black max-sm:text-sm";

  return (
    <div
      ref={header}
      className="absolute top-0 z-40 flex items-center justify-center w-full py-2 transition-all duration-500 text-neutral-200"
    >
      <div className="flex items-center justify-between w-3/4 max-sm:w-full max-sm:justify-around">
        <div
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 transition-colors duration-300 rounded-full cursor-pointer"
        >
          <img
            className="w-full max-sm:w-9"
            src={logo}
            alt="trust logo"
            id="logo"
          />
        </div>

        <div className="flex items-center justify-center gap-5 font-normal max-sm:gap-2">
          {[
            { name: "Services", href: "#OurServices" },
            { name: "Projects", href: "#OurProjects" },
            { name: "Why us", href: "#WhyUs" },
            { name: "Get in touch", href: "#ContactUs" },
          ].map((item, index) => (
            <span key={index}>
              <a
                className={
                  index !== 3
                    ? NavElementsStyles
                    : NavElementsStyles + " text-white"
                }
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
