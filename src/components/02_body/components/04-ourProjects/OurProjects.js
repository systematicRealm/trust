import React from "react";
import Frame from "./components/Frame";
import img1 from "./assets/imgs/img (1).webp";
import img2 from "./assets/imgs/img (2).webp";
import img3 from "./assets/imgs/img (3).webp";
import img4 from "./assets/imgs/img (4).webp";
import img5 from "./assets/imgs/img (5).webp";
import img6 from "./assets/imgs/img (6).webp";
import img7 from "./assets/imgs/img (7).webp";

export default function OurProjects() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-3" id="OurProjects">
      <div className="flex flex-row w-3/4 gap-2">
        <Frame img={img1} />
        <Frame img={img2} />
        <Frame img={img3} />
        <Frame img={img4} />
        <Frame img={img5} />
        <Frame img={img6} />
        <Frame img={img7} />
      </div>
    </div>
  );
}
