import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiUploadCloud, FiArrowLeft, FiInfo, FiLayers, FiDollarSign, FiImage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AddEditVehicle() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages([...images, URL.createObjectURL(e.target.files[0])]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors shadow-sm"
                >
                    <FiArrowLeft size={20} />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Add New Vehicle</h1>
                    <p className="text-sm text-gray-500">Fill in the details to add a vehicle to your fleet.</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button 
                    type="button" 
                    onClick={() => navigate(-1)} 
                    className="px-6 py-2.5 rounded-lg border border-gray-200 font-semibold text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <div className="w-32">
                    <Button childrenText="Save Vehicle" className="rounded-lg shadow-lg shadow-red-100" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FiInfo className="text-primary" /> Vehicle Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Vehicle Name" placeholder="e.g. Tesla Model S" className="bg-gray-50 border-gray-200" />
                        <Input label="Make / Brand" placeholder="e.g. Tesla" className="bg-gray-50 border-gray-200" />
                        <Input label="License Plate" placeholder="ABC-123" className="bg-gray-50 border-gray-200" />
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5 pl-1">Vehicle Type</label>
                            <div className="relative">
                                <select className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all">
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Convertible</option>
                                    <option>Coupe</option>
                                    <option>Hatchback</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                    <FiLayers />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 pl-1">Description</label>
                        <textarea 
                            rows="4" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all placeholder:text-gray-400" 
                            placeholder="Enter detailed description about the vehicle features and condition..."
                        ></textarea>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FiLayers className="text-primary" /> Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <Input label="Seats" type="number" placeholder="4" className="bg-gray-50 border-gray-200" />
                         <Input label="Fuel Type" placeholder="Petrol" className="bg-gray-50 border-gray-200" />
                         <Input label="Transmission" placeholder="Automatic" className="bg-gray-50 border-gray-200" />
                         <Input label="Mileage (km)" placeholder="12,000" className="bg-gray-50 border-gray-200" />
                         <Input label="Engine Capacity" placeholder="2.0L" className="bg-gray-50 border-gray-200" />
                         <Input label="Year" placeholder="2024" className="bg-gray-50 border-gray-200" />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FiDollarSign className="text-primary" /> Pricing
                    </h3>
                    <div className="space-y-4">
                        <Input label="Price per Day ($)" type="number" placeholder="0.00" className="bg-gray-50 border-gray-200" />
                        <Input label="Security Deposit ($)" type="number" placeholder="0.00" className="bg-gray-50 border-gray-200" />
                        
                        <div className="pt-2">
                            <label className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <input type="checkbox" className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary accent-primary" />
                                <div>
                                    <span className="block text-sm font-bold text-gray-900">Discount Available</span>
                                    <span className="block text-xs text-gray-500">Enable promotional pricing</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FiImage className="text-primary" /> Vehicle Images
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {images.map((img, idx) => (
                            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-primary transition-all group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FiUploadCloud className="w-8 h-8 mb-3 text-gray-400 group-hover:text-primary transition-colors" />
                            <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG (MAX. 5MB)</p>
                        </div>
                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                    </label>
                </div>
            </div>
        </div>
    </div>
  );
}