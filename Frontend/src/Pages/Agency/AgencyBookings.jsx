import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiCheck, FiX, FiSearch, FiFilter, FiChevronLeft, FiChevronRight, FiMoreVertical } from "react-icons/fi";

const bookings = [
  { id: "BK-9021", client: "Ali Raza", car: "Zephyr A4 Stratos", date: "Jan 24 - 27", total: "Rs 26000", status: "Pending", payment: "Unpaid" },
  { id: "BK-8802", client: "John Doe", car: "Horizon Mirage", date: "Jan 20 - 22", total: "Rs 9800", status: "Confirmed", payment: "Paid" },
  { id: "BK-7741", client: "Sara Khan", car: "Audi Q7", date: "Feb 01 - 05", total: "Rs 4500", status: "Cancelled", payment: "Refunded" },
  { id: "BK-9932", client: "Ahmed Bilal", car: "Tesla Model S", date: "Feb 10 - 12", total: "Rs 32000", status: "Confirmed", payment: "Paid" },
  { id: "BK-1023", client: "Maria Jan", car: "Toyota Fortuner", date: "Mar 05 - 08", total: "Rs 21000", status: "Pending", payment: "Unpaid" },
];

const tabs = ["All Bookings", "Pending", "Confirmed", "Cancelled"];

export default function AgencyBookings() {
  const [activeTab, setActiveTab] = useState("All Bookings");

  return (
    <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Booking Management</h1>
                <p className="text-sm text-gray-500">Manage and track all your fleet reservations.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search bookings..." 
                        className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary w-full sm:w-64"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                    <FiFilter /> Filter
                </button>
            </div>
        </div>

        <div className="flex gap-6 border-b border-gray-200 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                        activeTab === tab 
                        ? "border-primary text-primary" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                        <tr>
                            <th className="p-5">Booking ID</th>
                            <th className="p-5">Client Name</th>
                            <th className="p-5">Vehicle</th>
                            <th className="p-5">Rental Dates</th>
                            <th className="p-5">Total</th>
                            <th className="p-5">Status</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {bookings.map((bk) => (
                            <tr key={bk.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-5">
                                    <span className="font-bold text-gray-900">#{bk.id}</span>
                                </td>
                                <td className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                            {bk.client.charAt(0)}
                                        </div>
                                        <span className="font-medium text-gray-900">{bk.client}</span>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <span className="text-gray-600">{bk.car}</span>
                                </td>
                                <td className="p-5">
                                    <span className="text-sm text-gray-500">{bk.date}</span>
                                </td>
                                <td className="p-5">
                                    <span className="font-bold text-gray-900">{bk.total}</span>
                                    <span className={`block text-[10px] uppercase font-bold mt-0.5 ${bk.payment === "Paid" ? "text-green-600" : "text-orange-500"}`}>
                                        {bk.payment}
                                    </span>
                                </td>
                                <td className="p-5">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                                        bk.status === "Confirmed" ? "bg-green-50 text-green-700" : 
                                        bk.status === "Cancelled" ? "bg-red-50 text-red-700" : 
                                        "bg-orange-50 text-orange-700"
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                            bk.status === "Confirmed" ? "bg-green-500" : 
                                            bk.status === "Cancelled" ? "bg-red-500" : 
                                            "bg-orange-500"
                                        }`}></span>
                                        {bk.status}
                                    </span>
                                </td>
                                <td className="p-5 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link to={`/agency/booking/${bk.id}`} className="p-2 text-gray-500 hover:text-primary hover:bg-red-50 rounded-lg transition-colors" title="View Details">
                                            <FiEye size={18} />
                                        </Link>
                                        
                                        {bk.status === "Pending" && (
                                            <>
                                                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                                                    <FiCheck size={18} />
                                                </button>
                                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                                                    <FiX size={18} />
                                                </button>
                                            </>
                                        )}
                                        
                                        <button className="sm:hidden p-2 text-gray-400">
                                            <FiMoreVertical />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between p-5 border-t border-gray-100">
                <span className="text-sm text-gray-500">Showing <span className="font-bold text-gray-900">1-5</span> of <span className="font-bold text-gray-900">12</span> results</span>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                        <FiChevronLeft size={20} />
                    </button>
                    <button className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-primary">
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}