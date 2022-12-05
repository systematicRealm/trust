import React from "react";
import OurServicesCard from "./components/OurServicesCard";
import bolt from "./assets/bolt.svg";
import cable from "./assets/cable.svg";
import wrench from "./assets/wrench.svg";

export default function OurServices() {
  const cardContent = [
    {
      icon: bolt,
      title: "Electrical Systems",
      text: [
        "MV Switchgear Installations & Medium Voltage Cabling",
        "Power Transformers Installations",
        "Panel Boards & Related Cabling Installations",
        "Lighting Solutions & Lighting Control Systems",
        "Grounding and Lightning Protection Systems",
        "Street, Urban Lightings & Infrastructures",
        "Electrical Shop Drawings, Design Review & Calculations",
      ],
    },
    {
      icon: cable,
      title: "Low Current Systems",
      text: [
        "Data Networks & Wireless Solutions",
        "IP & Analogue Telephone Systems",
        "CCTV & IPTV Systems",
        "Fiber Optics Cables (OSP & OPT)",
        "Fire Detection & Alarm System",
        "Public Address & Sound Systems",
        "BMS & Smart Building Systems",
      ],
    },
    {
      icon: wrench,
      title: "Mechanical Works",
      text: [
        "HVAC Systems",
        "Fire Fighting Systems",
        "FM200/CO2 Systems",
        "Plumbing Works",
      ],
    },
  ];
  
  return (
    <div className="flex items-center justify-center w-full bg-slate-50 h-100v">
      <div className="flex items-center justify-center w-3/4 gap-3">
        <OurServicesCard
          icon={cardContent[0].icon}
          title={cardContent[0].title}
          text={cardContent[0].text.join(". ")}
        />
        <OurServicesCard
          icon={cardContent[1].icon}
          title={cardContent[1].title}
          text={cardContent[1].text.join(". ")}
        />
        <OurServicesCard
          icon={cardContent[2].icon}
          title={cardContent[2].title}
          text={cardContent[2].text.join(". ")}
        />
      </div>
    </div>
  );
}
