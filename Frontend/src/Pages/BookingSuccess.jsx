import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCheck, FiDownload, FiInfo } from "react-icons/fi";
import Button from "../components/Button";

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const paymentMethod = location.state?.method || "card"; 
  const isCod = paymentMethod === "cod";

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
         
         <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
             <FiCheck className="text-green-500 text-5xl" />
         </div>

         <h1 className="text-2xl font-bold text-textMain mb-2">
            {isCod ? "Booking Confirmed!" : "Payment Successful!"}
         </h1>
         
         <p className="text-textLight mb-8">
             Thank you for choosing Rentigo. Your booking <span className="font-bold text-black">#BK-9021</span> has been placed.
         </p>

         <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left border border-gray-100">
             <div className="flex justify-between mb-2">
                 <span className="text-xs text-textLight uppercase font-bold">Car</span>
                 <span className="text-sm font-bold text-textMain">Zephyr A4 Stratos</span>
             </div>
             <div className="flex justify-between mb-2">
                 <span className="text-xs text-textLight uppercase font-bold">Amount</span>
                 <span className="text-sm font-bold text-textMain">Rs 26000</span>
             </div>
             <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                 <span className="text-xs text-textLight uppercase font-bold">Payment Status</span>
                 <span className={`text-xs font-bold px-2 py-1 rounded ${isCod ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"}`}>
                    {isCod ? "Pay at Pickup" : "Paid via Card"}
                 </span>
             </div>
         </div>

         {isCod && (
            <div className="mb-6 flex gap-2 items-start bg-blue-50 p-3 rounded-lg text-left">
                <FiInfo className="text-blue-500 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-blue-700 leading-relaxed">
                    Please bring a valid ID and the total amount in cash or card when you arrive at the pickup location.
                </p>
            </div>
         )}

         <div className="space-y-3">
             <Button 
                childrenText="Go to Dashboard" 
                onClick={() => navigate("/dashboard")}
                className="w-full rounded-full"
             />
             <button className="w-full py-3 text-textMain font-bold bg-white border border-gray-200 rounded-full hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                 <FiDownload size={18} /> Download Ticket
             </button>
         </div>

      </div>
    </div>
  );
}