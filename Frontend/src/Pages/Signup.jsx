import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import signup from "../assets/signup.png"

export default function SignUp() {
  const [userType, setUserType] = useState("user");

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
        
        <div className="hidden lg:flex w-1/2  relative bg-gray-900 items-end">
          <img 
            src={signup} 
            alt="Smart Car Rental" 
            className="absolute inset-0 w-full py-12 mt-12 h-96 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="relative z-10 p-12 space-y-4 w-full">
              <ul className="space-y-3">
                  {[
                      "Fast & Easy Booking",
                      "Wide Selection of Premium Cars",
                      "Affordable Rates and Plans"
                  ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white font-medium text-lg">
                          <span className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                          {item}
                      </li>
                  ))}
              </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md space-y-6">
              
              <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-textMain">Welcome to <br /> Smart Car Rental</h1>
              </div>

              <div className="bg-gray-100 p-1.5 rounded-full flex relative">
                  <button 
                      onClick={() => setUserType("user")}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${userType === "user" ? "bg-primary text-white shadow-md" : "text-textLight hover:text-textMain"}`}
                  >
                      User
                  </button>
                  <button 
                      onClick={() => setUserType("agency")}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${userType === "agency" ? "bg-primary text-white shadow-md" : "text-textLight hover:text-textMain"}`}
                  >
                      Agency
                  </button>
              </div>

              <form className="space-y-4">
                  <Input 
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-white border-gray-200"
                  />
                  
                  <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white border-gray-200"
                  />
                  
                  <Input 
                      type="password" 
                      placeholder="Password" 
                      className="bg-white border-gray-200"
                  />
                  
                  <Input 
                      type="password" 
                      placeholder="Confirm Password" 
                      className="bg-white border-gray-200"
                  />

                  <div className="flex items-start gap-3 mt-4">
                      <input 
                          type="checkbox" 
                          id="terms" 
                          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer accent-primary" 
                      />
                      <label htmlFor="terms" className="text-sm text-textLight leading-tight">
                          I agree to the <Link to="/terms" className="text-textMain font-bold hover:underline">Terms of Service</Link> & <Link to="/privacy" className="text-textMain font-bold hover:underline">Privacy Policy</Link>.
                      </label>
                  </div>

                  <div className="pt-2">
                      <Button 
                          childrenText="Create Account" 
                          className="w-full rounded-full shadow-lg shadow-primary/20"
                      />
                  </div>

                  <p className="text-center text-sm text-textLight">
                      Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
                  </p>
              </form>

          </div>
        </div>

      </div>
    </div>
  );
}