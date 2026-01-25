import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import Input from "../components/Input";
import Button from "../components/Button";
import header from "../assets/AboutUs.jpg"
import sec from "../assets/AboutSec.png"

const contactInfo = [
  {
    icon: FiPhone,
    title: "Call Us",
    desc: "+32255476777",
    sub: "Mon-Sat from 8am to 5pm",
  },
  {
    icon: FiMail,
    title: "Email Us",
    desc: "hello@drivoxe.com",
    sub: "Online support 24/7",
  },
  {
    icon: FiMapPin,
    title: "Location",
    desc: "Gujranwala",
    sub: "Pakistan",
  },
];

export default function Contact() {
  return (
    <div className="w-full overflow-x-hidden font-sans bg-white">
      
      <section className="relative h-[350px] flex items-center justify-center bg-gray-900">
        <img 
            src={header}
            alt="Contact Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="relative z-10 text-center">
            <span className="uppercase tracking-widest text-xs font-bold text-primary mb-3 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
                Have questions about renting a car? We are here to help you.
            </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto bg-red-50 text-primary rounded-full flex items-center justify-center mb-6">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-textMain mb-2">{item.title}</h3>
                    <p className="text-lg font-semibold text-textMain">{item.desc}</p>
                    <p className="text-sm text-textLight mt-1">{item.sub}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
              
              <div className="lg:w-1/2">
                  <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Message Us</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">Send Us a Message</h2>
                  <p className="text-textLight mb-8">
                      Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly.
                  </p>

                  <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input placeholder="Your Name" label="Name" className="bg-bgLight border-primary-hover" />
                          <Input placeholder="Phone Number" label="Phone" className="bg-bgLight border-primary-hover" />
                      </div>
                      <Input type="email" placeholder="Email Address" label="Email" className="bg-bgLight border-primary-hover" />
                      <Input placeholder="Subject" label="Subject" className="bg-bgLight border-primary-hover" />
                      
                      <div className="mt-3">
                          <textarea 
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-3 rounded-lg bg-bgLight text-textMain border border-primary-hover outline-none focus:border-primary focus:bg-white transition-all placeholder:text-textLight resize-none"
                          ></textarea>
                      </div>

                      <div className="pt-4 w-48">
                          <Button 
                            childrenText="Send Message" 
                            className="rounded-full shadow-lg shadow-primary/20"
                          />
                      </div>
                  </form>
              </div>

              <div className="lg:w-1/2 h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative">
                  <iframe 
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216173.89467074873!2d73.99980176530718!3d32.1579320903631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2983d520eb29%3A0x6fb33af85e7a368!2sGujranwala%2C%20Pakistan!5e0!3m2!1sen!2s!4v1769279152289!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  
                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs">
                       <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                           <FiClock />
                       </div>
                       <div>
                           <p className="text-xs text-textLight">Opening Hours</p>
                           <p className="font-bold text-textMain text-sm">Mon - Sat: 8:00 - 17:00</p>
                       </div>
                  </div>
              </div>

          </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-black rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
              <div className="relative z-10 md:w-1/2 space-y-6 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">Need a Ride Now?</h2>
                  <p className="text-gray-400">Book your car wherever you are and ride immediately with Drivoxe.</p>
                  <div className="w-40 mx-auto md:mx-0">
                      <Button childrenText="Book Now" className="rounded-full" bgColor="bg-white" textColor="text-black" hoverBgColor="hover:bg-gray-200" />
                  </div>
              </div>
              <div className="mt-10 md:mt-0 md:w-1/2 relative z-10">
                   <img 
                      src={sec}
                      alt="Red Sport Car" 
                      className="w-full object-contain h-48 md:absolute md:-bottom-24 md:right-0 md:scale-125 opacity-90"
                   />
              </div>
          </div>
      </section>

    </div>
  );
}