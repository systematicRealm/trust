import React, { useEffect, useRef } from "react";
import logo from "./assets/logo.svg";
import './Header.css'

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

  return (
    <div
      ref={header}
      className="absolute top-0 z-40 flex items-center justify-center w-full py-2 text-white transition-all duration-500"
    >
      <div className="flex items-center justify-between w-3/4">
        <div
          onClick={scrollToTop}
          className="flex items-center justify-center w-10 transition-colors duration-300 rounded-full cursor-pointer"
        >
          <img className="w-full" src={logo} alt="trust logo" id="logo" />
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
                className="px-2 py-2 transition-colors duration-300 cursor-pointer hover:bg-neutral-200 rounded-3xl hover:text-black"
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
