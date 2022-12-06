import React from "react";
import CardWhyUs from "./components/CardWhyUs";
import assure from "./assets/assurance.svg";
import construct from "./assets/construction.svg";
import delivery from "./assets/onTime.svg";
import plan from "./assets/planning.svg";
import hq from "./assets/quality.svg";
import support from "./assets/support.svg";
import volunteer from "./assets/volunteer.svg";

export default function WhyUs() {
  const points = [
    "On-time Completion",
    "Quality Assurance",
    "Competitive Prices",
    "Technical Support",
    "Accurate Planning",
    "Safety Management",
  ];
  return (
    <div className="flex items-center justify-center w-full py-3" id="WhyUs">
      <div className="flex items-center justify-center w-4/6 gap-2">
        <CardWhyUs icon={delivery} text={points[0]} />
        <CardWhyUs icon={assure} text={points[1]} />
        <CardWhyUs icon={volunteer} text={points[2]} />
        <CardWhyUs icon={support} text={points[3]} />
        <CardWhyUs icon={plan} text={points[4]} />
        <CardWhyUs icon={hq} text={points[5]} />
      </div>
    </div>
  );
}
