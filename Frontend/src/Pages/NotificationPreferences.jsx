import React, { useState } from "react";
import Button from "../components/Button";
import { FiBell, FiMail, FiSmartphone } from "react-icons/fi";

const Toggle = ({ label, desc, checked, onChange }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
        <div>
            <h4 className="font-bold text-textMain text-sm">{label}</h4>
            <p className="text-xs text-textLight mt-1 max-w-sm">{desc}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
    </div>
);

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({
      promoEmail: true,
      bookingSms: true,
      securityAlerts: true, 
      newsLetter: false
  });

  const handleToggle = (key) => {
      setPrefs({ ...prefs, [key]: !prefs[key] });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
       <div className="mb-8">
           <h1 className="text-3xl font-bold text-textMain">Notification Settings</h1>
           <p className="text-textLight mt-2">Control how and when you want to be notified.</p>
       </div>

       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
           
           <div className="p-6 md:p-8">
               <div className="flex items-center gap-3 mb-6">
                   <div className="bg-blue-50 text-blue-500 p-2 rounded-lg"><FiMail size={20} /></div>
                   <h3 className="text-lg font-bold text-textMain">Email Notifications</h3>
               </div>
               
               <div className="pl-0 md:pl-12">
                   <Toggle 
                        label="Promotions & Offers" 
                        desc="Receive emails about new car arrivals and special discounts."
                        checked={prefs.promoEmail}
                        onChange={() => handleToggle("promoEmail")}
                   />
                   <Toggle 
                        label="Drivoxe Newsletter" 
                        desc="Weekly updates about our journey and travel tips."
                        checked={prefs.newsLetter}
                        onChange={() => handleToggle("newsLetter")}
                   />
               </div>
           </div>

           <hr className="border-gray-100" />

           <div className="p-6 md:p-8">
               <div className="flex items-center gap-3 mb-6">
                   <div className="bg-green-50 text-green-500 p-2 rounded-lg"><FiSmartphone size={20} /></div>
                   <h3 className="text-lg font-bold text-textMain">SMS & Alerts</h3>
               </div>
               
               <div className="pl-0 md:pl-12">
                   <Toggle 
                        label="Booking Updates" 
                        desc="Get SMS notifications for booking confirmations and reminders."
                        checked={prefs.bookingSms}
                        onChange={() => handleToggle("bookingSms")}
                   />
                   <Toggle 
                        label="Security Alerts" 
                        desc="Get notified about login attempts (Cannot be disabled)."
                        checked={prefs.securityAlerts}
                        onChange={() => {}} 
                   />
               </div>
           </div>

           <div className="bg-gray-50 p-6 flex justify-end">
               <div className="w-32">
                   <Button childrenText="Save" className="rounded-lg" />
               </div>
           </div>

       </div>
    </div>
  );
}