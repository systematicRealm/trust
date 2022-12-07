import React from "react";
import CardWhyUs from "./components/CardWhyUs";
import assure from "./assets/assurance.svg";
import construct from "./assets/construction.svg";
import delivery from "./assets/onTime.svg";
import plan from "./assets/planning.svg";
import hq from "./assets/quality.svg";
import support from "./assets/support.svg";
import volunteer from "./assets/volunteer.svg";

const points = [
  {
    icon: delivery,
    text: "On-time Completion",
  },
  {
    icon: assure,
    text: "Quality Assurance",
  },
  {
    icon: volunteer,
    text: "Competitive Prices",
  },
  {
    icon: support,
    text: "Technical Support",
  },
  {
    icon: plan,
    text: "Accurate Planning",
  },
  {
    icon: hq,
    text: "Safety Management",
  },
];
export default function WhyUs() {
  return (
    <div className="flex items-center justify-center w-full py-3" id="WhyUs">
      <div className="flex items-center justify-center w-4/6 gap-2">
        {points.map((point) => (
          <CardWhyUs key={point.text} icon={point.icon} text={point.text} />
        ))}
      </div>
    </div>
  );
}
