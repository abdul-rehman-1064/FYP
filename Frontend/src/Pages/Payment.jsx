import React from "react";
import { useNavigate } from "react-router-dom";
import { FiCreditCard, FiLock, FiShield } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen flex items-center justify-center">
      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
            <h1 className="text-xl font-bold text-textMain flex items-center gap-2">
                <FiCreditCard className="text-primary" /> Secure Payment
            </h1>
            <div className="flex gap-2 text-gray-400">
                <FiShield size={20} />
                <span className="text-xs font-medium uppercase tracking-widest mt-0.5">SSL Encrypted</span>
            </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="space-y-5">
                <p className="text-sm text-textLight mb-2">Pay with Credit or Debit Card</p>
                
                <Input label="Card Holder Name" placeholder="e.g. Ali Raza" className="bg-white border-gray-300" />
                
                <div className="relative">
                    <Input label="Card Number" placeholder="0000 0000 0000 0000" className="bg-white border-gray-300" />
                    <FiLock className="absolute right-4 top-[42px] text-gray-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry Date" placeholder="MM/YY" className="bg-white border-gray-300" />
                    <Input label="CVC" placeholder="123" type="password" className="bg-white border-gray-300" />
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="save" className="text-primary focus:ring-primary rounded" />
                    <label htmlFor="save" className="text-sm text-textLight cursor-pointer">Save card for future bookings</label>
                </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-bold text-textMain mb-4">Booking Summary</h3>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-textLight">Car Model</span>
                        <span className="font-medium">Zephyr A4 Stratos</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-textLight">Total Days</span>
                        <span className="font-medium">3 Days</span>
                    </div>
                    <div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-center">
                        <span className="text-textMain font-bold">Total Amount</span>
                        <span className="text-2xl font-bold text-primary">$260.70</span>
                    </div>
                </div>

                <Button 
                    childrenText="Confirm & Pay $260.70" 
                    onClick={() => navigate("/booking-success")}
                    className="w-full rounded-lg shadow-lg shadow-primary/20"
                />
            </div>
        </div>

      </div>
    </div>
  );
}