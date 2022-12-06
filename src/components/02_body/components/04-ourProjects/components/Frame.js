import React from "react";

export default function Frame({ img }) {
  return (
    <div className="flex items-center justify-center flex-1 w-full h-full max-w-full max-h-full overflow-hidden rounded-lg shadow bg-slate-50">
      <img className="object-cover object-center w-full h-full max-w-full max-h-full rounded-lg" src={img} />
    </div>
  );
}
