import React from "react";

export default function Input({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
