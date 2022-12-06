import React from "react";

export default function Line({ icon, title, line }) {
  return (
    <div className="flex items-center justify-start flex-1 max-w-full max-h-full gap-4">
      <div className="flex items-center justify-center h-full p-3 bg-white rounded-full shadow">
        <img className="max-w-6 max-h-6" src={icon} />
      </div>

      <div className="flex flex-col">
        <div className="font-light">{title}</div>
        <div>{line}</div>
      </div>
    </div>
  );
}
