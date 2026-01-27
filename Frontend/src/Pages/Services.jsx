import React from "react";
import { FiCpu, FiMapPin, FiShield, FiClock, FiSmartphone, FiUserCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import service from '../assets/service.jpeg';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div className="font-sans text-gray-900">
      
      <section className="relative bg-[#1A1A1A] py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Premium Car Rental <span className="text-primary">Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Experience the future of mobility with AI-driven recommendations, instant bookings, and a fleet that matches your style.
            </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard 
                    icon={FiCpu}
                    title="AI-Powered Matching"
                    description="Not sure which car to pick? Our smart AI engine analyzes your travel plans and budget to recommend the perfect vehicle instantly."
                />
                <ServiceCard 
                    icon={FiSmartphone}
                    title="Instant App Booking"
                    description="Book your ride in 3 clicks. Our seamless digital experience lets you reserve, pay, and unlock your car directly from your device."
                />
                <ServiceCard 
                    icon={FiUserCheck}
                    title="Chauffeur Services"
                    description="Need to relax? Hire our professional, verified drivers for inter-city travel or corporate events across Pakistan."
                />
                <ServiceCard 
                    icon={FiShield}
                    title="Secure Payments"
                    description="We use Stripe integration to ensure your transactions are 100% secure, transparent, and refundable according to policy."
                />
                <ServiceCard 
                    icon={FiMapPin}
                    title="Anywhere Delivery"
                    description="Get your car delivered to your doorstep, office, or airport arrival terminal. Convenience is our priority."
                />
                <ServiceCard 
                    icon={FiClock}
                    title="24/7 Roadside Support"
                    description="Never feel stranded. Our support team and recovery units are available round the clock to assist you."
                />
            </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img 
                    src={service} 
                    alt="Luxury Car Interior" 
                    className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
                />
            </div>
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Rentigo?</h2>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold">01</div>
                        <div>
                            <h4 className="font-bold text-lg">No Hidden Charges</h4>
                            <p className="text-gray-500 text-sm">What you see is what you pay. Taxes and insurance included.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">02</div>
                        <div>
                            <h4 className="font-bold text-lg">Well-Maintained Fleet</h4>
                            <p className="text-gray-500 text-sm">Every car undergoes a 20-point inspection before handover.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-primary flex items-center justify-center shrink-0 font-bold">03</div>
                        <div>
                            <h4 className="font-bold text-lg">Flexible Cancellation</h4>
                            <p className="text-gray-500 text-sm">Plans change. Cancel up to 24 hours before your trip for free.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <Link to="/cars" className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-200">
                        Browse Available Cars
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}