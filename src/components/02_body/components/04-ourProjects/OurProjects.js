import React from "react";
import Hayatt from "./components/Hayatt";
import KGL from "./components/KGL";
import UMU from "./components/UMU";

export default function OurProjects() {
  return (
    <div className="flex items-center justify-center w-full h-200v">
      <div className="flex flex-col items-center justify-center w-3/4 gap-3 h-1/2 bg-slate-200">
        <Hayatt />
        <KGL />
        <UMU />
      </div>
    </div>
  );
}
