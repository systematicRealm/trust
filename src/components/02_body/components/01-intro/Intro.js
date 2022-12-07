import React from "react";
import IntroBox from "./components/IntroBox";
import Title from "./components/Title";
import "./intro.css";

export default function Intro() {
  return (
    <div className="relative flex w-full bg-neutral-600 h-100v">
      <div
        className="relative flex items-center justify-center w-full h-full"
        id="intro-wrapper"
      >
        <div className="z-10 flex items-center justify-center w-5/6 gap-6 mt-12 h-fit max-sm:gap-7 max-sm:flex-col max-sm:mt-0">
          <Title />
          <IntroBox />
        </div>
      </div>
    </div>
  );
}
