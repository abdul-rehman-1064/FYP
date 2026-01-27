import React from "react";
import { FiCheck, FiX, FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, subtitle, features, recommended = false }) => (
  <div className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full
    ${recommended 
        ? "bg-[#1A1A1A] text-white border-gray-800 shadow-2xl scale-105 z-10" 
        : "bg-white text-gray-900 border-gray-100 shadow-lg hover:border-red-100"
    }`}>
    
    {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Most Popular
        </div>
    )}

    <div className="mb-6">
        <h3 className={`text-lg font-bold mb-2 ${recommended ? "text-gray-200" : "text-gray-500"}`}>{title}</h3>
        <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold">PKR {price}</span>
            <span className={`text-sm ${recommended ? "text-gray-400" : "text-gray-500"}`}>/ day</span>
        </div>
        <p className={`text-xs mt-2 ${recommended ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
    </div>

    <ul className="space-y-4 mb-8 flex-1">
        {features.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm">
                {item.included ? (
                    <FiCheck className={`shrink-0 ${recommended ? "text-primary" : "text-green-500"}`} />
                ) : (
                    <FiX className="shrink-0 text-gray-300" />
                )}
                <span className={!item.included ? "text-gray-400 decoration-slate-500" : ""}>{item.text}</span>
            </li>
        ))}
    </ul>

    <Link to="/cars" className={`w-full py-3 rounded-xl font-bold text-center transition-all 
        ${recommended 
            ? "bg-primary hover:bg-white hover:text-primary text-white" 
            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
        }`}>
        Choose {title}
    </Link>
  </div>
);

export default function Pricing() {
  return (
    <div className="font-sans text-gray-900">
      
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose the perfect category for your journey. No hidden fees, just pure driving pleasure.
        </p>
      </section>

      <section className="pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <PricingCard 
                title="Economy"
                price="4,500"
                subtitle="Best for daily commute & city travel."
                features={[
                    { text: "Small Hatchback (Alto/Cultus)", included: true },
                    { text: "Basic Audio System", included: true },
                    { text: "Manual/Auto Transmission", included: true },
                    { text: "Limited Mileage (150km)", included: true },
                    { text: "Chauffeur Service", included: false },
                    { text: "Luxury Interior", included: false },
                ]}
            />

            <PricingCard 
                title="Business / Sedan"
                price="8,000"
                subtitle="Comfort & style for long drives."
                recommended={true}
                features={[
                    { text: "Sedan (Civic/Corolla/City)", included: true },
                    { text: "Advanced Infotainment", included: true },
                    { text: "Climate Control AC", included: true },
                    { text: "Extended Mileage (300km)", included: true },
                    { text: "Insurance Included", included: true },
                    { text: "Chauffeur Option Available", included: true },
                ]}
            />

            <PricingCard 
                title="Luxury / SUV"
                price="25,000"
                subtitle="For weddings, events & VIPs."
                features={[
                    { text: "Premium SUV (Fortuner/Prado)", included: true },
                    { text: "Leather Interior & Sunroof", included: true },
                    { text: "Unlimited Mileage", included: true },
                    { text: "Full Insurance Coverage", included: true },
                    { text: "Priority Support 24/7", included: true },
                    { text: "Free Chauffeur", included: true },
                ]}
            />
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <FiHelpCircle className="text-primary" /> Security Deposit?
                    </h4>
                    <p className="text-gray-500 text-sm">Yes, a refundable security deposit is required. It varies from PKR 10,000 to PKR 50,000 depending on the car category.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <FiHelpCircle className="text-primary" /> Fuel Policy?
                    </h4>
                    <p className="text-gray-500 text-sm">We follow a "Same-to-Same" policy. You receive the car with a full tank and must return it with a full tank.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <FiHelpCircle className="text-primary" /> Documents Required?
                    </h4>
                    <p className="text-gray-500 text-sm">You need a valid CNIC, Driving License, and a utility bill copy for verification purposes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <FiHelpCircle className="text-primary" /> Insurance Coverage?
                    </h4>
                    <p className="text-gray-500 text-sm">Basic insurance is included. However, damage caused by negligence or traffic violations is the renter's responsibility.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}