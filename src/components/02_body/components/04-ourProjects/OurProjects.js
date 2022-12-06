import React from "react";
import Frame from "./components/Frame";
import img1 from "./assets/imgs/img (1).webp";
import img2 from "./assets/imgs/img (2).webp";
import img3 from "./assets/imgs/img (3).webp";
import img4 from "./assets/imgs/img (4).webp";
import img5 from "./assets/imgs/img (5).webp";
import img6 from "./assets/imgs/img (6).webp";
import img7 from "./assets/imgs/img (7).webp";
import Partner from "./components/Partner";
import logo1 from "./assets/logos/Hayatt.webp";
import logo2 from "./assets/logos/KBL.svg";
import logo3 from "./assets/logos/UMU.png";

export default function OurProjects() {
  return (
    <div className="relative flex flex-col items-center w-full py-4 justify-evenly h-100v bg-neutral-200">
      <div className="flex flex-row items-center justify-center w-3/4 gap-2">
        <Frame img={img1} />
        <Frame img={img2} />
        <Frame img={img3} />
        <Frame img={img4} />
        <Frame img={img5} />
        <Frame img={img6} />
        <Frame img={img7} />
      </div>

      <div className="flex flex-col items-center justify-center w-3/4 gap-3">
        <div className="text-lg font-light text-neutral-700">Our Partners</div>
        <div className="flex items-center w-2/3 gap-2 py-3 rounded-lg justify-evenly">
          <Partner logo={logo1} />
          <Partner logo={logo2} />
          <Partner logo={logo3} id={'#toBlack'} />
        </div>
      </div>
    </div>
  );
}
