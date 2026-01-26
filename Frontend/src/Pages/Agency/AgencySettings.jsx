import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiSave, FiLock, FiUser, FiMapPin, FiPhone, FiMail, FiCamera, FiGlobe } from "react-icons/fi";

export default function AgencySettings() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
        
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-500">Manage your agency profile and account security.</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiUser className="text-primary" /> Agency Profile
            </h3>
            
            <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                    <img 
                        src="https://placehold.co/150x150" 
                        alt="Agency Logo" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
                    />
                    <button className="absolute bottom-0 right-0 bg-white border border-gray-200 p-2 rounded-full text-gray-600 hover:text-primary shadow-sm transition-colors">
                        <FiCamera size={16} />
                    </button>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Agency Logo</h4>
                    <p className="text-xs text-gray-500 mt-1 mb-3">Recommended size 400x400px (PNG or JPG)</p>
                    <button className="text-sm font-medium text-primary hover:underline">Upload New</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Agency Name" defaultValue="Elite Rentals" className="bg-gray-50 border-gray-200" />
                <Input label="Website" defaultValue="www.eliterentals.com" leftIcon={<FiGlobe />} className="bg-gray-50 border-gray-200" />
                <Input label="Contact Email" defaultValue="contact@eliterentals.com" leftIcon={<FiMail />} type="email" className="bg-gray-50 border-gray-200" />
                <Input label="Phone Number" defaultValue="+92 300 1234567" leftIcon={<FiPhone />} className="bg-gray-50 border-gray-200" />
                
                <div className="md:col-span-2">
                    <Input label="Headquarters Address" defaultValue="123 Main Boulevard, Gulberg III, Lahore, Pakistan" leftIcon={<FiMapPin />} className="bg-gray-50 border-gray-200" />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5 pl-1">Business Description</label>
                    <textarea 
                        rows="4" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all placeholder:text-gray-400" 
                        defaultValue="Premium car rental services in Lahore offering a wide range of luxury and economy vehicles for all your travel needs."
                    ></textarea>
                </div>
            </div>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-6">
                <div className="w-full sm:w-40">
                    <Button childrenText="Save Changes" className="rounded-lg shadow-lg shadow-red-100" />
                </div>
            </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiLock className="text-primary" /> Security & Password
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <Input label="Current Password" type="password" placeholder="••••••••" className="bg-gray-50 border-gray-200" />
                </div>
                <Input label="New Password" type="password" placeholder="••••••••" className="bg-gray-50 border-gray-200" />
                <Input label="Confirm New Password" type="password" placeholder="••••••••" className="bg-gray-50 border-gray-200" />
            </div>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-6">
                <div className="w-full sm:w-48">
                    <Button childrenText="Update Password" bgColor="bg-gray-900" hoverBgColor="hover:bg-gray-800" className="rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  );
}