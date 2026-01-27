import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import signup from "../assets/signup.png"; 

export default function Login() {
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let role = "";
    let redirectPath = "/";

    if (email === "admin@gmail.com" && password === "Admin123") {
      role = "admin";
      redirectPath = "/admin/dashboard";
    }
    else if (userType === "agency" && email === "agency@gmail.com" && password === "Agency123") {
      role = "agency";
      redirectPath = "/agency/dashboard";
    }
    else if (userType === "user" && email === "user@gmail.com" && password === "User123") {
      role = "customer";
      redirectPath = "/"; 
    } 
    else {
      alert("Invalid Credentials! Please check email/password.");
      return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", role === "admin" ? "Admin User" : role === "agency" ? "Agency Manager" : "Ali Raza");

    window.dispatchEvent(new Event("auth-change"));

    alert(`Login Successful as ${role.toUpperCase()}!`);
    navigate(redirectPath);
  };

  return (
    <>
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px]">
        
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md space-y-6">
              
              <div className="text-center md:text-left">
                <img src="" alt="" />
                  <h1 className="text-2xl md:text-3xl font-bold text-textMain">Welcome Back! <br /> Login into account</h1>
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

              <form className="space-y-4" onSubmit={handleLogin}>
                  <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-white border-gray-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  
                  <Input 
                      type="password" 
                      placeholder="Password" 
                      className="bg-white border-gray-200"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer accent-primary" />
                        <label htmlFor="remember" className="text-sm text-textLight cursor-pointer">Remember me</label>
                      </div>
                      <Link to="/forgot-password" className="text-sm font-bold text-primary hover:underline">Forgot Password?</Link>
                  </div>

                  <div className="pt-4">
                      <Button 
                          childrenText="Log In" 
                          type="submit"
                          className="w-full rounded-full shadow-lg shadow-primary/20"
                      />
                  </div>

                  <p className="text-center text-sm text-textLight">
                      Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
                  </p>
              </form>

          </div>
        </div>

        <div className="hidden lg:flex w-1/2 relative bg-gray-900 items-end">
          <img src={signup} alt="Smart Car Rental" className="absolute inset-0 w-full py-12 mt-12 h-96 object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div className="relative z-10 p-12 space-y-4 w-full">
              <ul className="space-y-3">
                  {["Access Your Dashboard", "Manage Your Bookings", "Exclusive Member Deals"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white font-medium text-lg">
                          <span className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                          {item}
                      </li>
                  ))}
              </ul>
          </div>
        </div>

      </div>

    </div>

    <div className="flex justify-center md:flex-row flex-col items-center gap-32 ">
      <div className=" bg-gray-200 px-12 rounded-2xl p-2">
        <h2 className="text-center font-semibold m-2">User</h2>
        <p><span className="text-primary">Email:</span> user@gmail.com</p>
        <p><span className="text-primary">Password:</span> User123</p>
      </div>
      <div className=" bg-gray-200 px-12 rounded-2xl p-2">
        <h2 className="text-center font-semibold m-2">Agency</h2>
        <p><span className="text-primary">Email:</span> agency@gmail.com</p>
        <p><span className="text-primary">Password:</span> Agency123</p>
      </div>
      <div className=" bg-gray-200 px-12 rounded-2xl p-2">
        <h2 className="text-center font-semibold m-2 ">Admin</h2>
        <p><span className="text-primary">Email:</span> admin@gmail.com</p>
        <p><span className="text-primary">Password:</span> Admin123</p>
      </div>
    </div>
    
    </>
  );
}