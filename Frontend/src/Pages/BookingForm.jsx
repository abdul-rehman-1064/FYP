import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiMapPin, FiInfo } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";
import pic from "../assets/Hero.png"

const selectedCar = {
  name: "Zephyr A4 Stratos",
  image: pic,
  pricePerDay: 79,
};

export default function BookingForm() {
  const navigate = useNavigate();
  const [days, setDays] = useState(3);
  
  const subtotal = selectedCar.pricePerDay * days;
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <h1 className="text-3xl font-bold text-textMain mb-8">Finalize Your Booking</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-textMain mb-6 flex items-center gap-2">
                <FiMapPin className="text-primary" /> Trip Details
            </h2>
            
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-textMain mb-1">Pickup Location</label>
                        <Input placeholder="e.g. Lahore Airport" className="bg-bgLight border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-textMain mb-1">Drop-off Location</label>
                        <Input placeholder="Same as Pickup" className="bg-bgLight border-transparent" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-textMain mb-1">Pickup Date & Time</label>
                        <Input type="datetime-local" className="bg-bgLight border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-textMain mb-1">Drop-off Date & Time</label>
                        <Input type="datetime-local" className="bg-bgLight border-transparent" />
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                    <FiInfo className="text-blue-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-blue-700">
                        Please note that a valid driving license and ID will be required upon pickup.
                    </p>
                </div>

                <div className="pt-4">
                    <Button 
                        childrenText="Continue to Payment" 
                        onClick={() => navigate("/payment")}
                        className="w-full md:w-auto px-8 rounded-full shadow-lg shadow-primary/20"
                    />
                </div>
            </form>
        </div>

        <div className="w-full lg:w-96 h-fit bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-lg font-bold text-textMain mb-4">Order Summary</h3>
            
            <div className="mb-4 rounded-xl overflow-hidden bg-bgLight">
                <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-40 object-contain" />
                <div className="p-3">
                    <h4 className="font-bold text-textMain">{selectedCar.name}</h4>
                    <p className="text-xs text-textLight">Premium SUV</p>
                </div>
            </div>

            <div className="space-y-3 border-t border-gray-100 pt-4 text-sm">
                <div className="flex justify-between text-textLight">
                    <span>Rate per day</span>
                    <span>${selectedCar.pricePerDay}</span>
                </div>
                <div className="flex justify-between text-textLight">
                    <span>Duration</span>
                    <span>{days} Days</span>
                </div>
                <div className="flex justify-between text-textMain font-medium">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-textLight">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-primary">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}