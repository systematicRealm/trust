import React from "react";
import '../OurProjects.css'

export default function Partner({ logo, id }) {
  return (
    <div className="flex items-center justify-center w-20">
      <img id={id} className="object-cover object-center w-full h-full max-w-full max-h-full" src={logo} />
    </div>
  );
}
