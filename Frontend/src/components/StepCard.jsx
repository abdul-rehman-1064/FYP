import React from "react";

export default function StepCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50 h-full">
      <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-primary mb-6">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-textMain mb-3">{title}</h3>
      <p className="text-textLight text-sm leading-relaxed">{desc}</p>
    </div>
  );
}