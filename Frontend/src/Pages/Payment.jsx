import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiLock, FiShield, FiDollarSign, FiCheckCircle } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card"); 

  const handleConfirm = () => {
    navigate("/booking-success", { state: { method: paymentMethod } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
            <h1 className="text-xl font-bold text-textMain flex items-center gap-2">
                <FiLock className="text-primary" /> Secure Checkout
            </h1>
            <div className="flex gap-2 text-gray-400">
                <FiShield size={20} />
                <span className="text-xs font-medium uppercase tracking-widest mt-0.5">SSL Encrypted</span>
            </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="space-y-6">
                <h3 className="font-bold text-textMain">Select Payment Method</h3>
                
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setPaymentMethod("card")}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                            paymentMethod === "card" 
                            ? "border-primary bg-red-50 text-primary" 
                            : "border-gray-200 hover:border-gray-300 text-textLight"
                        }`}
                    >
                        <FiCreditCard size={24} />
                        <span className="text-sm font-bold">Pay Online</span>
                    </button>

                    <button 
                        onClick={() => setPaymentMethod("cod")}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                            paymentMethod === "cod" 
                            ? "border-primary bg-red-50 text-primary" 
                            : "border-gray-200 hover:border-gray-300 text-textLight"
                        }`}
                    >
                        <FiDollarSign size={24} />
                        <span className="text-sm font-bold">Cash on Pickup</span>
                    </button>
                </div>

                {paymentMethod === "card" ? (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <Input label="Card Holder Name" placeholder="e.g. Ali Raza" className="bg-white border-gray-300" />
                        <div className="relative">
                            <Input label="Card Number" placeholder="0000 0000 0000 0000" className="bg-white border-gray-300" />
                            <FiLock className="absolute right-4 top-[42px] text-gray-400" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Expiry Date" placeholder="MM/YY" className="bg-white border-gray-300" />
                            <Input label="CVC" placeholder="123" type="password" className="bg-white border-gray-300" />
                        </div>
                    </div>
                ) : (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3 items-start animate-in fade-in slide-in-from-top-4 duration-300">
                        <FiCheckCircle className="text-green-600 mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-green-800 text-sm">Pay at the Counter</h4>
                            <p className="text-xs text-green-700 mt-1">
                                You can pay the full amount via Cash or Card when you arrive to pick up the car. No upfront payment required today.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-bold text-textMain mb-4">Booking Summary</h3>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-textLight">Car Model</span>
                        <span className="font-medium">Zephyr A4 Stratos</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-textLight">Duration</span>
                        <span className="font-medium">3 Days</span>
                    </div>
                    
                    <div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-center">
                        <span className="text-textMain font-bold">Total Amount</span>
                        <span className="text-2xl font-bold text-primary">$260.70</span>
                    </div>

                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                        <span className="text-textLight">Payment Due:</span>
                        <span className={paymentMethod === "card" ? "text-green-600" : "text-red-500"}>
                            {paymentMethod === "card" ? "Now" : "At Pickup"}
                        </span>
                    </div>
                </div>

                <Button 
                    childrenText={paymentMethod === "card" ? "Confirm & Pay $260.70" : "Confirm Booking"} 
                    onClick={handleConfirm}
                    className="w-full rounded-lg shadow-lg shadow-primary/20"
                />
            </div>
        </div>

      </div>
    </div>
  );
}