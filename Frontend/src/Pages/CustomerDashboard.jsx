import React from "react";
import { FiClock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Hero.png"

const activeBookings = [
  {
    id: "BK-9021",
    carName: "Zephyr A4 Stratos",
    dates: "24 Jan - 28 Jan",
    status: "Active",
    price: 320
  }
];

const recommendedCars = [
  { id: 1, name: "Horizon Mirage", type: "Convertible", price: 49, image: img1 },
  { id: 2, name: "Aurora X5 Nebula", type: "Sedan", price: 99, image: img1},
];

export default function CustomerDashboard() {
    const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
           <h1 className="text-3xl font-bold text-textMain">Welcome back, Ali! 👋</h1>
           <p className="text-textLight mt-1">Here is what’s happening with your account today.</p>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-auto">
           <Link to="/ai-chat">
             <Button childrenText="Ask AI Assistant" className="rounded-full shadow-primary/20" />
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center"><FiClock size={24}/></div>
              <div>
                  <h3 className="text-2xl font-bold text-textMain">1</h3>
                  <p className="text-sm text-textLight">Active Booking</p>
              </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center"><FiCheckCircle size={24}/></div>
              <div>
                  <h3 className="text-2xl font-bold text-textMain">12</h3>
                  <p className="text-sm text-textLight">Total Trips</p>
              </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center"><FiAlertCircle size={24}/></div>
              <div>
                  <h3 className="text-2xl font-bold text-textMain">0</h3>
                  <p className="text-sm text-textLight">Pending Payments</p>
              </div>
          </div>
      </div>

      <div className="mb-12">
          <h2 className="text-xl font-bold text-textMain mb-4">Current Active Booking</h2>
          {activeBookings.length > 0 ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <img src={img1} alt="Car" className="rounded-lg object-cover w-16" />
                    <div>
                        <h4 className="font-bold text-lg text-textMain">{activeBookings[0].carName}</h4>
                        <p className="text-textLight text-sm">{activeBookings[0].dates}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        {activeBookings[0].status}
                    </span>
                    <span className="font-bold text-textMain">${activeBookings[0].price}</span>
                </div>
                <div className="w-full md:w-32 rounded-4xl">
                    <Button childrenText="View Details" onClick={() => navigate("/booking/BK-9021")} bgColor="bg-white" textColor="text-textMain" className="border border-gray-200 rounded-4xl hover:text-white hover:bg-gray-50"/>
                </div>
            </div>
          ) : (
            <p className="text-textLight italic">No active bookings at the moment.</p>
          )}
      </div>

      <div>
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-textMain">Recommended For You</h2>
            <Link to="/cars" className="text-primary font-bold text-sm hover:underline">View All</Link>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCars.map((car) => (
                <CarCard key={car.id} {...car} />
            ))}
         </div>
      </div>
    </div>
  );
}