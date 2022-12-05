import React from "react";
import img1 from "../assets/imgs/img (2).webp";
import img2 from "../assets/imgs/img (3).webp";

export default function KGL() {
  return (
    <div className="flex flex-col items-baseline justify-center flex-1 gap-3">
      <div className="overflow-hidden rounded-lg shadow  bg-slate-50">
        <img
          className="object-cover object-center rounded-lg"
          src={img1}
        />
      </div>
    </div>
  );
}
