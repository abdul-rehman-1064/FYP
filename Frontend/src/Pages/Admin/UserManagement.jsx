import React, { useState } from "react";
import { FiSearch, FiFilter, FiUserCheck, FiUserX, FiTrash2, FiMoreVertical, FiDownload } from "react-icons/fi";

const usersData = [
  { id: "USR-001", name: "Ali Raza", email: "ali@gmail.com", role: "Customer", status: "Active", joinDate: "Jan 12, 2025" },
  { id: "AGY-002", name: "Elite Rentals", email: "contact@elite.com", role: "Agency", status: "Active", joinDate: "Dec 05, 2024" },
  { id: "USR-003", name: "John Doe", email: "john@yahoo.com", role: "Customer", status: "Suspended", joinDate: "Feb 20, 2025" },
  { id: "AGY-004", name: "City Cars", email: "support@citycars.com", role: "Agency", status: "Pending", joinDate: "Jan 25, 2026" },
];

export default function UserManagement() {
  const [filterRole, setFilterRole] = useState("All");

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-700";
      case "Suspended": return "bg-red-100 text-red-700";
      case "Pending": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-sm text-gray-500">Manage customer and agency accounts.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors shadow-sm">
                <FiDownload /> Export CSV
            </button>
        </div>


        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by name, email or ID..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-all" 
                />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                <FiFilter className="text-gray-400" />
                <select 
                    className="bg-transparent text-sm text-gray-700 outline-none cursor-pointer font-medium"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                >
                    <option value="All">All Roles</option>
                    <option value="Customer">Customers</option>
                    <option value="Agency">Agencies</option>
                </select>
            </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                        <tr>
                            <th className="p-5">User Profile</th>
                            <th className="p-5">Role</th>
                            <th className="p-5">Status</th>
                            <th className="p-5">Joined Date</th>
                            <th className="p-5 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {usersData.filter(u => filterRole === "All" || u.role === filterRole).map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                                        user.role === "Agency" 
                                        ? "bg-purple-50 text-purple-700 border-purple-200" 
                                        : "bg-blue-50 text-blue-700 border-blue-200"
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-5">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex w-fit items-center gap-1.5 ${getStatusColor(user.status)}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                            user.status === "Active" ? "bg-green-600" : 
                                            user.status === "Suspended" ? "bg-red-600" : "bg-orange-600"
                                        }`}></span>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-5 text-sm text-gray-600 font-medium">{user.joinDate}</td>
                                <td className="p-5 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                        {user.status === "Suspended" ? (
                                            <button title="Activate User" className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-100">
                                                <FiUserCheck size={18} />
                                            </button>
                                        ) : (
                                            <button title="Suspend User" className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors border border-transparent hover:border-orange-100">
                                                <FiUserX size={18} />
                                            </button>
                                        )}
                                        <button title="Delete User" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100">
                                            <FiTrash2 size={18} />
                                        </button>
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
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
                <span>Showing {usersData.length} users</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>
    </div>
  );
}