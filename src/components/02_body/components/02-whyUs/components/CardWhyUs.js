import React from "react";
import '../WhyUs.css'

export default function CardWhyUs({ icon, text }) {
  return (
    <div className="flex flex-col justify-center flex-1 overflow-hidden rounded-lg shadow bg-slate-50">
      <span className="flex items-center justify-center w-full py-3 bg-theme-red">
        <img id="WhyUs-icon" src={icon} />
      </span>
      <span className="flex items-center justify-center h-full py-12 font-medium">{text}</span>
    </div>
  );
}
