import React from "react";

export default function SectionHeader({ tag, title, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {tag && (
        <span className="text-textLight uppercase tracking-widest text-sm font-semibold mb-2 block">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-textMain">{title}</h2>
    </div>
  );
}