import React from "react";

export default function Frame({ img, up }) {
  return (
    <div className="flex-1 overflow-hidden rounded-lg shadow bg-slate-100">
      <img className="object-cover object-center w-full h-full max-w-full max-h-full rounded-lg" src={img} />
    </div>
  );
}
