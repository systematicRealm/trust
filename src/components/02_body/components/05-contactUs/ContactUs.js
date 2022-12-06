import React from "react";
import Line from "./components/Line";
import call from "./assests/call.svg";
import mail from "./assests/mail.svg";
import location from "./assests/location.svg";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center w-full py-3">
      <div id="ContactUs" className="w-3/4">
        <div className="flex flex-row items-center justify-center w-full py-8">
          <Line icon={call} title={"Talk to us"} line={"+966-11222-8559"} />
          <Line
            icon={mail}
            title={"Write to us"}
            line={"info@trust-elect.com"}
          />
          <Line
            icon={location}
            title={"Visit us"}
            line={"Riyadh, Al-Loaloah Center"}
          />
        </div>
      </div>
    </div>
  );
}
