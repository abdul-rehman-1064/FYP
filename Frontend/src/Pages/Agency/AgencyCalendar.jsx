import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiCalendar } from "react-icons/fi";

const bookings = [
  { id: 1, car: "Tesla Model S", client: "Ali Raza", startDay: 2, endDay: 5, color: "bg-blue-100 text-blue-700 border-blue-200" },
  { id: 2, car: "BMW X5", client: "Sara Khan", startDay: 12, endDay: 14, color: "bg-purple-100 text-purple-700 border-purple-200" },
  { id: 3, car: "Audi A6", client: "John Doe", startDay: 18, endDay: 18, color: "bg-green-100 text-green-700 border-green-200" },
  { id: 4, car: "Toyota Fortuner", client: "Ahmed Ali", startDay: 24, endDay: 28, color: "bg-orange-100 text-orange-700 border-orange-200" },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AgencyCalendar() {
  const [currentMonth, setCurrentMonth] = useState("January 2026");

  const daysArray = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
       
       <div className="flex justify-between items-center p-6 border-b border-gray-100">
           <div>
               <h1 className="text-2xl font-bold text-textMain">Booking Schedule</h1>
               <p className="text-sm text-textLight">Manage your fleet availability</p>
           </div>
           <div className="flex items-center gap-3">
               <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-textLight">Today</button>
               <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">
                   <button className="p-1 hover:text-primary"><FiChevronLeft /></button>
                   <span className="text-sm font-bold text-textMain w-32 text-center">{currentMonth}</span>
                   <button className="p-1 hover:text-primary"><FiChevronRight /></button>
               </div>
               <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
                   <FiCalendar /> New Booking
               </button>
           </div>
       </div>

       <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
           {daysOfWeek.map((day) => (
               <div key={day} className="py-3 text-center text-xs font-bold text-textLight uppercase tracking-widest">
                   {day}
               </div>
           ))}
       </div>
       
       <div className="flex-1 grid grid-cols-7 auto-rows-fr bg-white">
           {daysArray.map((day) => {
               const validDay = day <= 31 ? day : null;
               
               const daysBookings = bookings.filter(b => validDay >= b.startDay && validDay <= b.endDay);

               return (
                   <div key={day} className={`border-b border-r border-gray-100 p-2 min-h-30 relative transition-colors ${validDay ? "hover:bg-gray-50" : "bg-gray-50/30"}`}>
                       {validDay && (
                           <>
                               <span className={`text-sm font-medium block mb-2 ${day === 24 ? "bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md" : "text-textLight"}`}>
                                   {validDay}
                               </span>
                               
                               <div className="space-y-1.5">
                                   {daysBookings.map((bk) => (
                                       <div key={bk.id} className={`text-xs px-2 py-1.5 rounded-md border border-l-4 truncate cursor-pointer hover:opacity-80 transition-opacity ${bk.color} ${bk.startDay === validDay ? "border-l-current" : "border-l-transparent ml-[-9px] rounded-l-none"}`}>
                                           <span className="font-bold">{bk.client}</span> - {bk.car}
                                       </div>
                                   ))}
                               </div>
                           </>
                       )}
                   </div>
               );
           })}
       </div>
    </div>
  );
}