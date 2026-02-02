import React, { useState } from "react";
import { FiSearch, FiFilter, FiMapPin, FiTruck, FiMoreHorizontal, FiExternalLink } from "react-icons/fi";

const allFleet = [
  { id: 1, car: "Tesla Model S", type: "Sedan", agency: "Elite Rentals", location: "Lahore", price: 1200, status: "Available", image: "https://placehold.co/300x200/png?text=Tesla", plate: "LEC-2024" },
  { id: 2, car: "Honda Civic", type: "Sedan", agency: "City Cars", location: "Islamabad", price: 4500, status: "Rented", image: "https://placehold.co/300x200/png?text=Civic", plate: "ICT-901" },
  { id: 3, car: "Toyota Prado", type: "SUV", agency: "Offroad Kings", location: "Karachi", price: 1500, status: "Maintenance", image: "https://placehold.co/300x200/png?text=Prado", plate: "KHI-555" },
  { id: 4, car: "Audi A6", type: "Luxury", agency: "Elite Rentals", location: "Lahore", price: 1800, status: "Available", image: "https://placehold.co/300x200/png?text=Audi", plate: "LEC-1122" },
  { id: 5, car: "Kia Sportage", type: "SUV", agency: "City Cars", location: "Islamabad", price: 700, status: "Available", image: "https://placehold.co/300x200/png?text=Sportage", plate: "ICT-334" },
  { id: 6, car: "Fortuner Legender", type: "SUV", agency: "Offroad Kings", location: "Karachi", price: 1400, status: "Rented", image: "https://placehold.co/300x200/png?text=Fortuner", plate: "KHI-888" },
];

export default function AdminFleet() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const getStatusBadge = (status) => {
    switch(status) {
      case "Available": return "bg-green-100 text-green-700 border-green-200";
      case "Rented": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Maintenance": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredFleet = allFleet.filter(vehicle => {
    const matchesSearch = vehicle.car.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          vehicle.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || vehicle.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 pb-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Global Fleet Overview</h1>
                <p className="text-sm text-gray-500">Monitor vehicle inventory across all registered agencies.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search car, agency, or city..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-500 shadow-sm transition-all" 
                    />
                </div>
                
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiFilter className="text-gray-400" />
                    </div>
                    <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="pl-9 pr-8 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:border-red-500 shadow-sm appearance-none cursor-pointer"
                    >
                        <option value="All">All Status</option>
                        <option value="Available">Available</option>
                        <option value="Rented">Rented</option>
                        <option value="Maintenance">Maintenance</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFleet.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <img src={vehicle.image} alt={vehicle.car} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        
                        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold border backdrop-blur-md shadow-sm ${getStatusBadge(vehicle.status)}`}>
                            {vehicle.status}
                        </span>

                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-lg flex items-center gap-2 shadow-sm border border-white/50">
                            <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold">
                                {vehicle.agency.charAt(0)}
                            </div>
                            <span className="text-xs font-bold text-gray-800 truncate">{vehicle.agency}</span>
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">{vehicle.type} • {vehicle.plate}</p>
                                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">{vehicle.car}</h3>
                            </div>
                        </div>

                        <div className="flex items-center text-sm text-gray-500 mb-4 gap-1.5">
                            <FiMapPin className="text-gray-400" /> {vehicle.location}
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                            <div>
                                <span className="block text-xs text-gray-400 font-medium">Daily Rate</span>
                                <span className="text-lg font-extrabold text-gray-900">Rs {vehicle.price}</span>
                            </div>
                            
                            <div className="flex gap-2">
                                <button className="p-2 rounded-lg border border-gray-100 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Vehicle Details">
                                    <FiTruck size={18} />
                                </button>
                                <button className="p-2 rounded-lg border border-gray-100 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Go to Agency">
                                    <FiExternalLink size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {filteredFleet.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                <FiTruck className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No vehicles found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
            </div>
        )}
    </div>
  );
}