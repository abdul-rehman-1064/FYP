import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  FiMinus, FiPlus, FiArrowLeft, FiArrowRight, 
  FiWind, FiSettings, FiUsers, FiActivity 
} from "react-icons/fi";
import pic from "../assets/AboutUs.jpg"

import Button from "../components/Button";
import CarCard from "../components/CarCard";
import details from "../assets/Details.jpg";

const carDetails = {
  name: "Vanguard CX2 Convertible",
  price: 59,
  description: "Elevate your journey with the Ford Mustang Convertible, the epitome of American muscle and open-air excitement. Feel the wind in your hair as you experience the power, style, and iconic allure of this classic masterpiece. Cruise with confidence, top down.",
  specs: [
    { icon: FiWind, label: "Convertible" },
    { icon: FiSettings, label: "5.0-Liter V8" },
    { icon: FiActivity, label: "440 HP" },
    { icon: FiSettings, label: "Automatic" }, 
    { icon: FiUsers, label: "4 Passengers" },
  ],
  colors: ["#ef4444", "#1f2937", "#f3f4f6"], 
  images: [
    "https://placehold.co/800x500/png?text=Main+Red+Car+Side",
    "https://placehold.co/200x150/png?text=Front+View",
    "https://placehold.co/200x150/png?text=Side+View",
    "https://placehold.co/200x150/png?text=Back+View",
  ]
};

const features = [
  { title: "Convertible Top", desc: "Enjoy the open-air experience with an easy power-operated convertible top." },
  { title: "Sport Mode", desc: "Unleash the full power of the V8 engine for an exhilarating ride." },
  { title: "Infotainment System", desc: "Stay connected with a modern and flexible multimedia system." },
  { title: "Advanced Safety", desc: "Benefit from modern safety features, including airbags and stability control." },
  { title: "Leather Interior", desc: "Experience premium comfort with leather-trimmed seats and design." },
  { title: "Iconic Design", desc: "Turn heads with the timeless, bold styling of the Ford Mustang." },
];

const relatedCars = [
  { id: 1, name: "Horizon Mirage", type: "Convertible", price: 49, image: pic },
  { id: 2, name: "Vanguard Phoenix", type: "Coupe", price: 69, image: pic }, 
  { id: 3, name: "Apex Autos Typhoon", type: "Sport", price: 99, image: pic },
  { id: 4, name: "Radiant Solstice", type: "Vintage", price: 89, image: pic },
];

export default function CarDetails() {
  const navigate = useNavigate(); 
  const [selectedImage, setSelectedImage] = useState(carDetails.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(carDetails.colors[0]);

  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);
  const handleIncrement = () => setQuantity(quantity + 1);

  return (
    <div className="w-full font-sans bg-white">
      
      <section className="relative h-[250px] flex items-center justify-center bg-black overflow-hidden">
        <img 
            src={details} 
            alt="Header Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mt-10">
            <p className="text-gray-300 text-xs font-bold tracking-widest uppercase mb-2"><span className="text-primary font-bold">Home / Cars /</span> Car Detail</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Car Details</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/2 space-y-4">
                <div className="w-full h-[350px] md:h-[450px] bg-bgLight rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                    <img src={selectedImage} alt="Main Car" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {carDetails.images.slice(1).map((img, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setSelectedImage(img)}
                            className={`h-24 md:h-32 bg-bgLight rounded-xl p-2 cursor-pointer border-2 transition-all ${selectedImage === img ? "border-primary" : "border-transparent hover:border-gray-300"}`}
                        >
                            <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-2">{carDetails.name}</h2>
                <div className="mb-6">
                    <span className="text-xs font-bold text-textLight uppercase tracking-wide">Starting at</span>
                    <p className="text-3xl font-bold text-textMain">${carDetails.price}<span className="text-lg font-normal text-textLight">/day</span></p>
                </div>

                <p className="text-textLight text-sm leading-relaxed mb-8 border-b border-gray-100 pb-8">
                    {carDetails.description}
                </p>

                <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-4 py-2">
                        <button onClick={handleDecrement} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-textMain transition-colors">
                            <FiMinus size={14} />
                        </button>
                        <span className="font-bold text-lg w-4 text-center">{quantity}</span>
                        <button onClick={handleIncrement} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-textMain transition-colors">
                            <FiPlus size={14} />
                        </button>
                    </div>
                    <div className="w-40">
                         <Button 
                           childrenText="Book Now" 
                           onClick={() => navigate("/booking-form")} 
                           className="rounded-full shadow-lg shadow-primary/30" 
                         />
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="font-bold text-xs uppercase text-textMain mb-4 tracking-widest">Specifications</h4>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {carDetails.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-textMain">
                                <spec.icon className="text-primary" size={18} />
                                <span className="text-sm font-medium">{spec.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-xs uppercase text-textMain mb-4 tracking-widest">In Color</h4>
                    <div className="flex gap-3">
                        {carDetails.colors.map((color, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? "border-gray-400 scale-110" : "border-transparent"}`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-bgLight py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold text-textMain mb-8">Car Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-textMain text-sm uppercase mb-2">{feature.title}</h4>
                          <p className="text-textLight text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
               <h3 className="text-2xl font-bold text-textMain">You may also like</h3>
               <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full bg-gray-100 text-textLight hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                       <FiArrowLeft size={20} />
                   </button>
                   <button className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-hover flex items-center justify-center transition-colors shadow-lg shadow-primary/30">
                       <FiArrowRight size={20} />
                   </button>
               </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedCars.map((car) => (
                  <CarCard key={car.id} {...car} />
              ))}
          </div>
      </section>

    </div>
  );
}