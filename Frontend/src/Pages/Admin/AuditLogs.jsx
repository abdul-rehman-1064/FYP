import React, { useState } from "react";
import { FiClock, FiShield, FiSearch, FiFilter, FiDownload, FiCheckCircle, FiAlertTriangle, FiXCircle } from "react-icons/fi";

const logs = [
  { id: "LOG-9001", action: "User Login", actor: "Ali Raza (Customer)", ip: "192.168.1.1", time: "Jan 24, 10:30 AM", status: "Success", details: "Logged in via Web" },
  { id: "LOG-9002", action: "Delete Vehicle", actor: "Elite Admin (Agency)", ip: "192.168.1.45", time: "Jan 24, 11:15 AM", status: "Warning", details: "Vehicle ID: 4421 removed" },
  { id: "LOG-9003", action: "Failed Login", actor: "Unknown", ip: "45.33.22.11", time: "Jan 24, 11:20 AM", status: "Failed", details: "Invalid Password (3 attempts)" },
  { id: "LOG-9004", action: "Update Settings", actor: "System Admin", ip: "10.0.0.1", time: "Jan 24, 02:00 PM", status: "Success", details: "Changed tax rate to 15%" },
  { id: "LOG-9005", action: "API Key Access", actor: "External Service", ip: "203.11.44.12", time: "Jan 23, 09:45 PM", status: "Success", details: "Fetch fleet data" },
];

export default function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const getStatusBadge = (status) => {
    switch(status) {
      case "Success": return "bg-green-50 text-green-700 border-green-200";
      case "Failed": return "bg-red-50 text-red-700 border-red-200";
      case "Warning": return "bg-orange-50 text-orange-700 border-orange-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "Success": return <FiCheckCircle size={14} />;
      case "Failed": return <FiXCircle size={14} />;
      case "Warning": return <FiAlertTriangle size={14} />;
      default: return <FiShield size={14} />;
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          log.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          log.ip.includes(searchTerm);
    const matchesType = filterType === "All" || log.status === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 text-white rounded-lg">
                    <FiShield size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Security Audit Logs</h1>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        System monitoring active
                    </p>
                </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <FiDownload /> Export CSV
            </button>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search by Action, Actor, or IP Address..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition-all font-mono" 
                />
            </div>
            <div className="relative w-full sm:w-48">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFilter className="text-gray-400" />
                </div>
                <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-gray-400 cursor-pointer appearance-none"
                >
                    <option value="All">All Events</option>
                    <option value="Success">Success</option>
                    <option value="Failed">Failed</option>
                    <option value="Warning">Warning</option>
                </select>
            </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider border-b border-gray-200">
                        <tr>
                            <th className="p-5">Timestamp</th>
                            <th className="p-5">Event Action</th>
                            <th className="p-5">Actor</th>
                            <th className="p-5">Technical Details</th>
                            <th className="p-5 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredLogs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-5">
                                    <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                                        <FiClock size={16} /> {log.time}
                                    </div>
                                </td>
                                <td className="p-5">
                                    <span className="font-bold text-gray-900 block">{log.action}</span>
                                    <span className="text-xs text-gray-400 font-mono">{log.id}</span>
                                </td>
                                <td className="p-5">
                                    <span className="text-sm text-gray-700 font-medium">{log.actor}</span>
                                </td>
                                <td className="p-5">
                                    <div className="text-sm">
                                        <p className="text-gray-900 mb-0.5">{log.details}</p>
                                        <p className="text-xs text-gray-500 font-mono bg-gray-100 px-1.5 py-0.5 rounded w-fit">IP: {log.ip}</p>
                                    </div>
                                </td>
                                <td className="p-5 text-right">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(log.status)}`}>
                                        {getStatusIcon(log.status)}
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
                <span>Showing {filteredLogs.length} events</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-50">Prev</button>
                    <button className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100">Next</button>
                </div>
            </div>
        </div>
    </div>
  );
}