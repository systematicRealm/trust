import React from "react";

export default function IntroBox() {
  return (
    <div
      className="relative flex flex-col w-1/2 gap-3 px-10 py-8 bg-transparent shadow-md text-neutral-200 backdrop-blur-xl max-sm:w-full before:bg-transparent-black before:w-full before:h-full before:absolute before:top-0 before:left-0 rounded-3xl before:rounded-3xl max-sm:py-5 max-sm:px-6 max-sm:gap-2"
    >
      <div className="z-10 flex leading-6 max-sm:text-xs">
        Trust is a Saudi company as an Electro Mechanical Engineering &
        Contracting firm (MEP). Coverage area is over all Kingdom of Saudi
        Arabia. Main Head Office in Riyadh. Trust aims to be the one stop
        contractor and partner for all electromechanical needs in all the
        Kingdom of Saudi Arabia.
      </div>
      <div className="z-10 flex leading-6 max-sm:text-xs">
        The services rendered by Trust can cover a project in its entirety from
        original concept to acceptance of completed construction work. These
        solutions are integrated with multi-vendors’ products which serve
        customer technical requirements and specifications with consideration
        the optimum cost requirements.
      </div>
      <div className="z-10 flex leading-6 max-sm:text-xs">
        Trust goal is to exceed the expectations of every client by offering
        outstanding customer service, increased flexibility, and greater value,
        thus. optimizing system functionality. and improving operation
        efficiency. Our associates are distinguished by their functional and
        technical expertise combined with their hands-on experience, thereby
        ensuring that our clients receive the most effective and professional
        service. Our mission statement to build long-term relationships with our
        customers and provide exceptional services by pursuing business through
        innovation.and advance technology.
      </div>
    </div>
  );
}
