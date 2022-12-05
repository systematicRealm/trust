import React from "react";
import CardWhyUs from "./components/CardWhyUs";
import assure from "./assets/assurance.svg";

export default function WhyUs() {
  return (
    <div className="flex items-center justify-center w-full bg-neutral-500 h-100v">
      <div className="flex items-center justify-center w-3/4 gap-2">
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
        <CardWhyUs icon={assure} text={"Assurence Lalaity"} />
      </div>
    </div>
  );
}
