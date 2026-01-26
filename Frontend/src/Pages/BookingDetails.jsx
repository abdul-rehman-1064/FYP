import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FiMapPin, FiCalendar, FiClock, FiDownload, 
  FiPrinter, FiArrowLeft, FiCreditCard, FiXCircle, FiDollarSign 
} from "react-icons/fi";
import Button from "../components/Button";

const bookingData = {
  id: "BK-9021",
  status: "Active", 
  datePlaced: "Jan 20, 2026",
  car: {
    name: "Zephyr A4 Stratos",
    type: "Premium SUV",
    image: "https://placehold.co/300x200/png?text=Car+Side+View",
    pricePerDay: 79,
  },
  trip: {
    pickup: { location: "Lahore Airport, LHE", date: "Jan 24, 2026", time: "10:00 AM" },
    dropoff: { location: "Lahore Airport, LHE", date: "Jan 27, 2026", time: "10:00 AM" },
    duration: "3 Days"
  },
  payment: {
    method: "Cash on Pickup",
    subtotal: 237,
    tax: 23.70,
    total: 260.70,
    status: "Pending" 
  },
  customer: {
    name: "Ali Raza",
    email: "ali@example.com",
    phone: "+92 300 1234567"
  }
};

export default function BookingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "bg-blue-100 text-blue-700";
      case "Completed": return "bg-green-100 text-green-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const isCardPayment = bookingData.payment.method.toLowerCase().includes("visa") || bookingData.payment.method.toLowerCase().includes("card");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)} 
                className="p-2 rounded-full hover:bg-gray-100 text-textMain transition-colors"
              >
                  <FiArrowLeft size={24} />
              </button>
              <div>
                  <h1 className="text-2xl font-bold text-textMain flex items-center gap-3">
                      Booking #{id || bookingData.id}
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(bookingData.status)}`}>
                          {bookingData.status}
                      </span>
                  </h1>
                  <p className="text-sm text-textLight">Placed on {bookingData.datePlaced}</p>
              </div>
          </div>
          
          <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <FiPrinter /> Print
              </button>
              <Button childrenText="Download Invoice" className="rounded-lg text-sm px-6" />
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <img src={bookingData.car.image} alt={bookingData.car.name} className="w-full sm:w-48 h-32 object-contain bg-bgLight rounded-xl" />
                  <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-xl font-bold text-textMain">{bookingData.car.name}</h2>
                      <p className="text-textLight text-sm mb-4">{bookingData.car.type}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                          <div className="bg-gray-50 px-3 py-1 rounded text-xs font-medium text-textMain border border-gray-100">
                             Automatic
                          </div>
                          <div className="bg-gray-50 px-3 py-1 rounded text-xs font-medium text-textMain border border-gray-100">
                             5 Seats
                          </div>
                          <div className="bg-gray-50 px-3 py-1 rounded text-xs font-medium text-textMain border border-gray-100">
                             Petrol
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-textMain mb-6">Trip Details</h3>
                  
                  <div className="relative pl-8 border-l-2 border-dashed border-gray-200 space-y-10">
                      
                      <div className="relative">
                          <div className="absolute -left-9.75 top-1 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                          <p className="text-xs font-bold text-textLight uppercase mb-1">Pickup</p>
                          <h4 className="font-bold text-textMain text-lg">{bookingData.trip.pickup.location}</h4>
                          <div className="flex gap-4 mt-1 text-sm text-textMain font-medium">
                              <span className="flex items-center gap-1"><FiCalendar className="text-primary"/> {bookingData.trip.pickup.date}</span>
                              <span className="flex items-center gap-1"><FiClock className="text-primary"/> {bookingData.trip.pickup.time}</span>
                          </div>
                      </div>

                      <div className="relative">
                          <div className="absolute -left-9.75 top-1 w-5 h-5 bg-gray-800 rounded-full border-4 border-white shadow-sm"></div>
                          <p className="text-xs font-bold text-textLight uppercase mb-1">Drop-off</p>
                          <h4 className="font-bold text-textMain text-lg">{bookingData.trip.dropoff.location}</h4>
                          <div className="flex gap-4 mt-1 text-sm text-textMain font-medium">
                              <span className="flex items-center gap-1"><FiCalendar className="text-gray-500"/> {bookingData.trip.dropoff.date}</span>
                              <span className="flex items-center gap-1"><FiClock className="text-gray-500"/> {bookingData.trip.dropoff.time}</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-50">
                      <p className="text-sm text-textLight">Total Duration: <span className="font-bold text-textMain">{bookingData.trip.duration}</span></p>
                  </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-textMain mb-4">Customer Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <p className="text-xs text-textLight uppercase">Full Name</p>
                          <p className="font-medium text-textMain">{bookingData.customer.name}</p>
                      </div>
                      <div>
                          <p className="text-xs text-textLight uppercase">Email Address</p>
                          <p className="font-medium text-textMain">{bookingData.customer.email}</p>
                      </div>
                      <div>
                          <p className="text-xs text-textLight uppercase">Phone Number</p>
                          <p className="font-medium text-textMain">{bookingData.customer.phone}</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-textMain mb-6">Payment Summary</h3>
                  
                  <div className="space-y-3 text-sm pb-4 border-b border-gray-100">
                      <div className="flex justify-between">
                          <span className="text-textLight">Rate ({bookingData.trip.duration})</span>
                          <span className="font-medium text-textMain">${bookingData.payment.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-textLight">Tax (10%)</span>
                          <span className="font-medium text-textMain">${bookingData.payment.tax}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-textLight">Discount</span>
                          <span className="font-medium text-green-600">-$0.00</span>
                      </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between items-center mb-6">
                      <span className="font-bold text-lg text-textMain">Total Amount</span>
                      <span className="font-bold text-2xl text-primary">${bookingData.payment.total}</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-textMain">
                            
                            {isCardPayment ? <FiCreditCard size={14} /> : <FiDollarSign size={14} />}
                        </div>
                        <div>
                            <p className="text-xs font-bold text-textMain">Payment Method</p>
                            <p className="text-xs text-textLight">{bookingData.payment.method}</p>
                        </div>
                      </div>
                      
                      <span className={`text-xs font-bold px-2 py-1 rounded ${bookingData.payment.status === "Paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                          {bookingData.payment.status}
                      </span>
                  </div>
              </div>

              {bookingData.status === "Active" && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                      <h3 className="text-sm font-bold text-textMain mb-2">Need to change plans?</h3>
                      <p className="text-xs text-textLight mb-4">You can cancel your booking up to 24 hours before pickup for a full refund.</p>
                      <button className="w-full py-2.5 border border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2 text-sm">
                          <FiXCircle /> Cancel Booking
                      </button>
                  </div>
              )}

              <div className="text-center">
                  <p className="text-sm text-textLight">Need help with this order?</p>
                  <button className="text-primary font-bold text-sm hover:underline">Contact Support</button>
              </div>

          </div>
      </div>
    </div>
  );
}