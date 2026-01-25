import React, { useState } from "react";
import { FiSearch, FiFilter, FiDownload, FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const bookingsData = [
    { id: "BK-9021", car: "Zephyr A4 Stratos", date: "Jan 24 - Jan 28, 2026", total: "$320", status: "Active" },
    { id: "BK-8802", car: "Horizon Mirage", date: "Dec 10 - Dec 12, 2025", total: "$98", status: "Completed" },
    { id: "BK-7100", car: "Vanguard CX2", date: "Nov 01 - Nov 05, 2025", total: "$250", status: "Cancelled" },
];

export default function MyBookings() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
           <h1 className="text-3xl font-bold text-textMain">My Bookings</h1>
           <div className="flex gap-2">
               <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:border-primary">
                   <FiFilter /> Filter
               </button>
               <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                   Download Report
               </button>
           </div>
       </div>

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                   <thead>
                       <tr className="bg-bgLight text-textLight text-xs uppercase tracking-wider border-b border-gray-100">
                           <th className="p-4 font-semibold">Booking ID</th>
                           <th className="p-4 font-semibold">Car Details</th>
                           <th className="p-4 font-semibold">Rental Dates</th>
                           <th className="p-4 font-semibold">Total Price</th>
                           <th className="p-4 font-semibold">Status</th>
                           <th className="p-4 font-semibold text-right">Actions</th>
                       </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                       {bookingsData.map((booking) => (
                           <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                               <td className="p-4 font-bold text-primary">#{booking.id}</td>
                               <td className="p-4 font-medium text-textMain">{booking.car}</td>
                               <td className="p-4 text-sm text-textLight">{booking.date}</td>
                               <td className="p-4 font-bold text-textMain">{booking.total}</td>
                               <td className="p-4">
                                   <span className={`px-2 py-1 rounded text-xs font-bold ${
                                       booking.status === "Active" ? "bg-blue-100 text-blue-700" :
                                       booking.status === "Completed" ? "bg-green-100 text-green-700" :
                                       "bg-red-100 text-red-700"
                                   }`}>
                                       {booking.status}
                                   </span>
                               </td>
                               <td className="p-4 text-right">
                                   <Link to={`/booking/${booking.id}`} className="text-sm font-bold text-textMain hover:text-primary underline">
                                       View Details
                                   </Link>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       </div>
    </div>
  );
}