import React from "react";
import { 
  FiAward, FiShield, FiZap, FiSmile, FiUsers, FiGlobe, FiTrendingUp, FiHeart 
} from "react-icons/fi"; 
import { SiTesla, SiBmw, SiMercedes, SiToyota } from "react-icons/si"; 
import { FiMousePointer, FiBookOpen, FiMapPin, FiRefreshCw } from "react-icons/fi"; 
import AboutUs from "../assets/AboutUs.jpg"
import AboutSec from "../assets/AboutSec.png"


import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";


const brands = [SiTesla, SiBmw, SiMercedes, SiToyota, SiTesla];

const features = [
  {
    icon: FiAward,
    title: "Quality & Variety",
    desc: "Discover our diverse range of meticulously maintained vehicles, ensuring you always drive in style. From sleek sedans to rugged SUVs, our fleet offers the perfect ride for every occasion. We meticulously maintain each vehicle to the highest standards, ensuring not just style but also performance and reliability on your journey.",
  },
  {
    icon: FiZap,
    title: "Affordable Rates",
    desc: "We believe that luxury travel should be accessible to all. We offer competitive prices without hidden fees, giving you the freedom to experience the comfort and style of our premium vehicles without breaking the bank. We’re committed to providing affordable luxury for your travels.",
  },
  {
    icon: FiMousePointer,
    title: "Easy Booking",
    desc: "Reserving your dream car is a breeze with Drivoxe. Our user-friendly online platform and mobile app make the booking process straightforward and efficient. In just a few clicks, you can secure your choice of vehicle and hit the road, ensuring a seamless and hassle-free experience from start to finish.",
  },
  {
    icon: FiSmile,
    title: "Customer Satisfaction",
    desc: "Our loyal customers trust Drivoxe for the excellence of our service and the exquisite selection in our fleet. From the moment you book to the final mile of your journey, we are dedicated to providing top-notch service. We pride ourselves on responsive customer support, available 24/7 to assist you. Your satisfaction is our ultimate reward.",
  },
];

const milestones = [
  { icon: FiAward, title: "Outcome Status Award" },
  { icon: FiShield, title: "Safety Class Excellence" },
  { icon: FiZap, title: "Innovation Champion" },
  { icon: FiGlobe, title: "Sustainable Travel Partner" },
  { icon: FiSmile, title: "Best Customer Support" },
  { icon: FiTrendingUp, title: "Business Growth Milestone" },
  { icon: FiUsers, title: "Community Engagement" },
  { icon: FiHeart, title: "Industry Leadership" },
];

const steps = [
  { icon: FiMousePointer, title: "Select", desc: "Choose your desired car from our fleet." },
  { icon: FiBookOpen, title: "Book", desc: "Reserve your car online or through our app." },
  { icon: FiMapPin, title: "Drive", desc: "Pick up your car and hit the road." },
  { icon: FiRefreshCw, title: "Return", desc: "Bring the car back at the end of your rental period." },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden font-sans">
      
      <section className="mt-8 relative h-100 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={AboutUs}
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
            <span className="uppercase tracking-widest text-sm font-medium mb-2 block"> <span className="text-primary font-bold">Home /</span> About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold">Who We Are</h1>
        </div>
      </section>

      <div className="py-10 mt-5 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 px-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((Icon, i) => (
                 <Icon key={i} size={40} className="text-textMain" />
            ))}
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
                <img 
                    src={AboutSec}
                    alt="Our Journey" 
                    className="w-full object-contain relative z-10 drop-shadow-2xl" 
                />
               
                <div className="absolute top-10 left-0 flex items-center gap-2 bg-white p-2 rounded-full shadow-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                        <FiMousePointer size={14} />
                    </div>
                    <span className="text-xs font-bold text-textMain pr-3">PICK THE CAR!</span>
                </div>
            </div>

            <div>
                <span className="text-textLight uppercase tracking-widest text-sm font-semibold mb-2 block">Our Journey</span>
                <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-6 leading-tight">
                    Pioneering <br/> <span className="text-primary">Premium</span> Car Rentals
                </h2>
                <p className="text-textLight text-lg leading-relaxed mb-6">
                    Drivoxe embarked on a remarkable journey to revolutionize travel. Driven by a relentless passion for redefining the road experience, we curate the finest vehicles and exceptional service. 
                </p>
                <p className="text-textLight text-sm leading-relaxed">
                     From every journey to every destination, we are committed to delivering quality and comfort, offering a diverse range of meticulously maintained vehicles to ensure you always drive in style.
                </p>
            </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
            <SectionHeader title="Why Choose Drivoxe?" center={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {features.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-6 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
                        <div className="shrink-0 text-primary-hover w-12 h-12 flex items-center justify-center rounded-full">
                            <item.icon size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-textMain mb-2">{item.title}</h4>
                            <p className="text-textLight text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bgLight relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-textLight uppercase text-sm font-semibold">How It Works</span>
                <h2 className="text-3xl font-bold text-textMain mt-2">Simple Steps to Get the Car</h2>
            </div>

            <div className="relative mt-16">
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-200 hidden md:block -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border-4 border-bgLight group-hover:border-primary transition-colors duration-300 relative">
                                <step.icon size={28} className="text-textMain group-hover:text-primary transition-colors" />
                                <div className="absolute -bottom-10 md:bottom-auto md:top-1/2 md:-right-1/2 w-3 h-3 bg-gray-300 rounded-full hidden"></div> 
                            </div>
                            
                            <h4 className="font-bold text-lg text-textMain mb-2">{step.title}</h4>
                            <p className="text-xs text-textLight px-4">{step.desc}</p>
                        </div>
                    ))}
                </div>
                
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
                    <h1 className="text-[100px] md:text-[150px] font-black text-gray-200/70 tracking-widest uppercase">DRIVOXE</h1>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
             <div className="text-left mb-12">
                <span className="text-textLight uppercase tracking-widest text-sm font-semibold block mb-2">Achievements</span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain max-w-md">Let’s See Our Celebrated Milestones</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                {milestones.map((m, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-3 group">
                         <div className="text-primary p-3 rounded-full bg-red-50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                             <m.icon size={32} />
                         </div>
                         <h4 className="font-bold text-sm md:text-base text-textMain">{m.title}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto bg-black rounded-[40px] p-8 md:p-16 relative overflow-hidden flex items-center justify-between">
              
              <div className="relative z-10 w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      Reserve Your Dream Car Today and Feel Best Experience Travel
                  </h2>
                  <div className="w-48">
                       <Button 
                         childrenText="Let's Drive with Us" 
                         bgColor="bg-primary" 
                         textColor="text-white" 
                         className="rounded-full"
                       />
                  </div>
              </div>

              <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-full">
                   <img 
                      src={AboutUs}
                      alt="Luxury Car" 
                      className="w-full h-full object-cover object-right opacity-80"
                   />
                   <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent"></div>
              </div>
          </div>
      </section>

    </div>
  );
}