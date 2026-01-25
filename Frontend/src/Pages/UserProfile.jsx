import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { FiCamera, FiSave } from "react-icons/fi";
import profile from "../assets/Testimonal1.jpeg"


export default function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
        <h1 className="text-3xl font-bold text-textMain mb-8">Account Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        <img src={profile} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-bgLight" />
                        <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary-hover shadow-md">
                            <FiCamera size={16} />
                        </button>
                    </div>
                    <h2 className="font-bold text-lg text-textMain">Ali Raza</h2>
                    <p className="text-sm text-textLight mb-4">Customer</p>
                    <p className="text-xs text-green-600 bg-green-50 py-1 px-2 rounded inline-block">Verified Account</p>
                </div>
            </div>

            <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-textMain mb-6">Personal Information</h3>
                    
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <Input label="First Name" defaultValue="Ali" className="bg-bgLight border-transparent" />
                             <Input label="Last Name" defaultValue="Raza" className="bg-bgLight border-transparent" />
                        </div>
                        
                        <Input label="Email Address" type="email" defaultValue="ali@example.com" className="bg-bgLight border-transparent" />
                        <Input label="Phone Number" defaultValue="+92 300 1234567" className="bg-bgLight border-transparent" />
                        
                        <div className="mt-6">
                            <h4 className="font-bold text-textMain mb-3">Documents</h4>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                <p className="text-sm text-textMain font-medium">Upload Driving License (Front & Back)</p>
                                <p className="text-xs text-textLight mt-1">JPG, PNG or PDF up to 5MB</p>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <div className="w-40">
                                <Button childrenText="Save Changes" className="rounded-lg gap-2" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}