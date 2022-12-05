import React from "react";
import k1 from "../assets/KGL/KGL (1).jpg";
import k2 from "../assets/KGL/KGL (2).jpg";
import k3 from "../assets/KGL/KGL (3).jpg";
import k4 from "../assets/KGL/KGL (4).jpg";
import k5 from "../assets/KGL/KGL (5).jpg";

export default function KGL() {
  return (
    <div className="flex flex-row items-baseline justify-center gap-3">

      <div className="flex-1 overflow-hidden rounded-lg shadow bg-slate-50">
        <img className="object-cover object-center w-full h-full rounded-lg" src={k1} />
      </div>

    </div>
  );
}
