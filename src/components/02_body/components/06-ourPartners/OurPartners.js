import React from "react";
import logo1 from "./assets/logos/Hayatt.webp";
import logo2 from "./assets/logos/KBL.svg";
import logo3 from "./assets/logos/UMU.png";
import Partner from "./components/Partner";

export default function OurPartners() {
  return (
    <div className="flex items-center justify-center w-full py-3">

      <div className="flex flex-col items-center justify-center w-3/4 gap-5">

        <div className="text-2xl font-medium text-zinc-900">Our Customers</div>

        <div className="flex items-center w-2/3 gap-2 rounded-lg justify-evenly">
          <Partner logo={logo1} />
          <Partner logo={logo2} />
          <Partner logo={logo3} id={"#toBlack"} />
        </div>
        
      </div>

    </div>
  );
}
