import React from "react";
import "./OurServicesCard.css";

export default function OurServicesCard({ icon, title, text }) {
  return (
    <div className="relative flex flex-col items-start flex-1 gap-5 bg-white rounded-lg shadow py-9 px-7 justify-start-center">
      <span className="absolute top-0 left-0 right-0 w-2/6 h-2 m-auto rounded rounded-t-none bg-theme-red"></span>
      <div className="flex items-start justify-center">
        <img id="OurServicesCard-img" className="w-24" src={icon} />
      </div>

      <div className="text-lg font-bold text-black">{title}</div>

      <div className="text-base text-slate-700">{text}</div>
    </div>
  );
}
