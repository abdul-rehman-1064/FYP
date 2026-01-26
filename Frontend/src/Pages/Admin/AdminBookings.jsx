import React, { useState } from "react";
import { FiEye, FiAlertCircle, FiSearch, FiFilter, FiCheck, FiX, FiDownload } from "react-icons/fi";

const globalBookings = [
  { id: "BK-9021", user: "Ali Raza", agency: "Elite Rentals", car: "Tesla Model S", status: "Confirmed", amount: "$320", date: "Jan 24, 2026", dispute: false },
  { id: "BK-8822", user: "John Doe", agency: "City Cars", car: "Honda Civic", status: "Completed", amount: "$120", date: "Jan 22, 2026", dispute: true },
  { id: "BK-1033", user: "Sara Khan", agency: "Offroad Kings", car: "Toyota Prado", status: "Pending", amount: "$450", date: "Jan 25, 2026", dispute: false },
  { id: "BK-7744", user: "Ahmed Bilal", agency: "Elite Rentals", car: "Audi A6", status: "Cancelled", amount: "$0", date: "Jan 20, 2026", dispute: false },
];

export default function AdminBookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const getStatusBadge = (status) => {
    switch(status) {
      case "Confirmed": return "bg-green-100 text-green-700 border-green-200";
      case "Completed": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Pending": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredBookings = globalBookings.filter(bk => {
    const matchesSearch = bk.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          bk.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bk.agency.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || bk.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Booking Management</h1>
                <p className="text-sm text-gray-500">Monitor and manage all system-wide reservations.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors shadow-sm">
                <FiDownload /> Export Report
            </button>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by Booking ID, User, or Agency..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all" 
                />
            </div>
            <div className="relative w-full sm:w-48">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFilter className="text-gray-400" />
                </div>
                <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-red-500 cursor-pointer appearance-none"
                >
                    <option value="All">All Status</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                        <tr>
                            <th className="p-5">Booking ID</th>
                            <th className="p-5">Customer & Agency</th>
                            <th className="p-5">Vehicle Details</th>
                            <th className="p-5">Date & Amount</th>
                            <th className="p-5">Status</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredBookings.map((bk) => (
                            <tr key={bk.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-5">
                                    <span className="font-mono font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded text-xs">#{bk.id}</span>
                                    {bk.dispute && (
                                        <div className="mt-2 flex items-center gap-1 text-xs text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-full w-fit">
                                            <FiAlertCircle size={12} /> Dispute
                                        </div>
                                    )}
                                </td>
                                <td className="p-5">
                                    <p className="font-bold text-gray-900 text-sm">{bk.user}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">via {bk.agency}</p>
                                </td>
                                <td className="p-5">
                                    <span className="text-sm text-gray-700 font-medium">{bk.car}</span>
                                </td>
                                <td className="p-5">
                                    <p className="font-bold text-gray-900 text-sm">{bk.amount}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{bk.date}</p>
                                </td>
                                <td className="p-5">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getStatusBadge(bk.status)}`}>
                                        {bk.status}
                                    </span>
                                </td>
                                <td className="p-5 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100" title="View Details">
                                            <FiEye size={18} />
                                        </button>
                                        
                                        {bk.status === "Pending" && (
                                            <>
                                                <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-100" title="Approve">
                                                    <FiCheck size={18} />
                                                </button>
                                                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100" title="Reject">
                                                    <FiX size={18} />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
                <span>Showing {filteredBookings.length} results</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>
    </div>
  );
}