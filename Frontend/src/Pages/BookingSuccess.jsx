import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiDownload, FiHome } from "react-icons/fi";
import Button from "../components/Button";

export default function BookingSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
         
         <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
             <FiCheck className="text-green-500 text-5xl" />
         </div>

         <h1 className="text-2xl font-bold text-textMain mb-2">Booking Confirmed!</h1>
         <p className="text-textLight mb-8">
             Thank you for choosing Drivoxe. Your booking <span className="font-bold text-black">#BK-9021</span> has been successfully placed.
         </p>

         <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left border border-gray-100">
             <div className="flex justify-between mb-2">
                 <span className="text-xs text-textLight uppercase font-bold">Car</span>
                 <span className="text-sm font-bold text-textMain">Zephyr A4 Stratos</span>
             </div>
             <div className="flex justify-between">
                 <span className="text-xs text-textLight uppercase font-bold">Dates</span>
                 <span className="text-sm font-bold text-textMain">Jan 24 - Jan 27</span>
             </div>
         </div>

         <div className="space-y-3">
             <Button 
                childrenText="Go to Dashboard" 
                onClick={() => navigate("/dashboard")}
                className="w-full rounded-full"
             />
             <button className="w-full py-3 text-textMain font-bold bg-white border border-gray-200 rounded-full hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                 <FiDownload size={18} /> Download Receipt
             </button>
         </div>

      </div>
    </div>
  );
}