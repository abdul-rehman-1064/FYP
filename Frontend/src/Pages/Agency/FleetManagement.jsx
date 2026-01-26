import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiPlus, FiEdit2, FiTrash2, FiFilter, FiSearch, FiGrid, FiList, FiMoreVertical 
} from "react-icons/fi";

const fleet = [
  { id: 1, name: "Zephyr A4 Stratos", type: "SUV", price: 79, status: "Available", image: "https://placehold.co/300x200/png?text=Car+1", plate: "LZX-901" },
  { id: 2, name: "Horizon Mirage", type: "Convertible", price: 49, status: "Rented", image: "https://placehold.co/300x200/png?text=Car+2", plate: "ABC-123" },
  { id: 3, name: "Aurora X5", type: "Sedan", price: 99, status: "Maintenance", image: "https://placehold.co/300x200/png?text=Car+3", plate: "XYZ-789" },
  { id: 4, name: "Vanguard CX2", type: "Coupe", price: 69, status: "Available", image: "https://placehold.co/300x200/png?text=Car+4", plate: "QWE-456" },
];

export default function FleetManagement() {
  const [viewMode, setViewMode] = useState("list"); 

  return (
    <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Fleet Management</h1>
                <p className="text-sm text-gray-500">Manage your vehicle inventory and status.</p>
            </div>
            <Link to="/agency/add-vehicle" className="flex items-center gap-2 bg-primary hover:bg-red-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-red-100 transition-all font-medium">
                <FiPlus size={18} /> Add New Vehicle
            </Link>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by name or plate..." 
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                </div>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                    <FiFilter /> Filter
                </button>
            </div>

            <div className="flex gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200">
                <button 
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white shadow-sm text-primary" : "text-gray-400 hover:text-gray-600"}`}
                >
                    <FiList size={18} />
                </button>
                <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-gray-400 hover:text-gray-600"}`}
                >
                    <FiGrid size={18} />
                </button>
            </div>
        </div>

        {viewMode === "list" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold tracking-wider">
                            <tr>
                                <th className="p-5">Vehicle Details</th>
                                <th className="p-5">Type</th>
                                <th className="p-5">Plate Number</th>
                                <th className="p-5">Price/Day</th>
                                <th className="p-5">Status</th>
                                <th className="p-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {fleet.map((car) => (
                                <tr key={car.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-bold text-gray-900">{car.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-sm text-gray-600">{car.type}</td>
                                    <td className="p-5 text-sm font-mono text-gray-500">{car.plate}</td>
                                    <td className="p-5 font-bold text-gray-900">${car.price}</td>
                                    <td className="p-5">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                            car.status === "Available" ? "bg-green-50 text-green-700" :
                                            car.status === "Rented" ? "bg-blue-50 text-blue-700" :
                                            "bg-yellow-50 text-yellow-700"
                                        }`}>
                                            {car.status}
                                        </span>
                                    </td>
                                    <td className="p-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link to={`/agency/edit-vehicle/${car.id}`} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <FiEdit2 size={18} />
                                            </Link>
                                            <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

        {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fleet.map((car) => (
                    <div key={car.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                        <div className="relative h-48 bg-gray-100">
                            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">
                                {car.plate}
                            </div>
                            <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold shadow-sm ${
                                car.status === "Available" ? "bg-green-500 text-white" :
                                car.status === "Rented" ? "bg-blue-500 text-white" :
                                "bg-yellow-400 text-yellow-900"
                            }`}>
                                {car.status}
                            </span>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{car.type}</p>
                                    <h3 className="font-bold text-lg text-gray-900">{car.name}</h3>
                                </div>
                                <p className="text-lg font-bold text-primary">${car.price}<span className="text-xs font-normal text-gray-400">/day</span></p>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-xs text-gray-400">Added on Jan 12, 2025</span>
                                <div className="flex gap-2">
                                    <Link to={`/agency/edit-vehicle/${car.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                        <FiEdit2 size={18} />
                                    </Link>
                                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}