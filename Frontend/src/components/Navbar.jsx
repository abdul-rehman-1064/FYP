import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiMenu, FiX, FiUser, FiLogOut, FiCalendar, FiGrid, FiMessageSquare 
} from "react-icons/fi";
import Button from "./Button";
import Logo from "./Logo";
import profile from "../assets/Testimonal1.jpeg";

const navLinks = [
  { name: "Cars", path: "/cars" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User");
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const name = localStorage.getItem("userName") || "User";
    setIsLoggedIn(loggedIn);
    setUserName(name);
  };

  useEffect(() => {
    checkLoginStatus();

    window.addEventListener("auth-change", checkLoginStatus);

    return () => {
      window.removeEventListener("auth-change", checkLoginStatus);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
     setIsOpen(false);
     setShowProfileMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("auth-change")); 
    
    handleLinkClick();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-black tracking-wide" onClick={handleLinkClick}>
              <Logo width="100px" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-textMain hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn && (
               <Link to="/ai-chat" className="text-textMain hover:text-primary font-medium flex items-center gap-1">
                  <FiMessageSquare size={18} /> AI Assistant
               </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <Link to="/contact" className="text-primary font-semibold hover:text-primary-hover transition-colors">
                  Contact
                </Link>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="w-32">
                  <Button childrenText="Sign up" onClick={() => navigate("/signup")} className="rounded-full" />
                </div>
              </>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 focus:outline-none hover:bg-gray-50 p-1.5 rounded-full transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                    <img src={profile} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-semibold text-textMain pr-2">{userName}</span>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-2 border-b border-gray-100 mb-2">
                          <p className="text-xs text-textLight uppercase tracking-wider font-bold">My Account</p>
                      </div>
                      
                      <Link to="/dashboard" onClick={handleLinkClick} className="px-4 py-2.5 hover:bg-bgLight text-textMain font-medium flex items-center gap-3">
                          <FiGrid size={18} className="text-gray-500"/> Dashboard
                      </Link>
                      <Link to="/my-bookings" onClick={handleLinkClick} className=" px-4 py-2.5 hover:bg-bgLight text-textMain font-medium flex items-center gap-3">
                          <FiCalendar size={18} className="text-gray-500"/> My Bookings
                      </Link>
                      <Link to="/profile" onClick={handleLinkClick} className=" px-4 py-2.5 hover:bg-bgLight text-textMain font-medium flex items-center gap-3">
                          <FiUser size={18} className="text-gray-500"/> Profile Settings
                      </Link>
                      
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button 
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2.5 text-red-500 hover:bg-red-50 font-medium flex items-center gap-3 transition-colors"
                        >
                            <FiLogOut size={18} /> Logout
                        </button>
                      </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
             {isLoggedIn && (
                 <Link to="/profile" className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                    <img src={profile} alt="User" className="w-full h-full object-cover" />
                 </Link>
             )}
            <button onClick={() => setIsOpen(!isOpen)} className="text-textMain hover:text-primary transition-colors focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
         <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
             <div className="px-4 py-6 space-y-4 flex flex-col">
                
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-textMain hover:bg-bgLight hover:text-primary transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}

                {isLoggedIn ? (
                    <>
                        <div className="border-t border-gray-100 my-2"></div>
                        <p className="px-4 text-xs font-bold text-textLight uppercase tracking-wider">Account</p>
                        
                        <Link to="/ai-chat" onClick={handleLinkClick} className=" px-4 py-3 rounded-lg text-base font-medium text-textMain hover:bg-bgLight flex items-center gap-3">
                            <FiMessageSquare /> AI Assistant
                        </Link>
                        <Link to="/dashboard" onClick={handleLinkClick} className="px-4 py-3 rounded-lg text-base font-medium text-textMain hover:bg-bgLight flex items-center gap-3">
                            <FiGrid /> Dashboard
                        </Link>
                        <Link to="/my-bookings" onClick={handleLinkClick} className=" px-4 py-3 rounded-lg text-base font-medium text-textMain hover:bg-bgLight flex items-center gap-3">
                            <FiCalendar /> My Bookings
                        </Link>
                        <Link to="/profile" onClick={handleLinkClick} className=" px-4 py-3 rounded-lg text-base font-medium text-textMain hover:bg-bgLight flex items-center gap-3">
                            <FiUser /> Profile
                        </Link>
                        
                        <button onClick={handleLogout} className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-500 hover:bg-red-50 flex items-center gap-3 mt-2">
                            <FiLogOut /> Logout
                        </button>
                    </>
                ) : (
                    <>
                        <div className="border-t border-gray-100 my-2 pt-4 space-y-3">
                            <Link
                              to="/contact"
                              className="block px-4 py-2 text-center text-base font-medium text-primary hover:bg-bgLight rounded-lg"
                              onClick={handleLinkClick}
                            >
                              Contact Support
                            </Link>
                            <Button childrenText="Sign up" className="w-full rounded-lg" onClick={() => { navigate("/signup"); handleLinkClick(); }} />
                            <p className="text-center text-sm text-textLight mt-2">
                                Already a member? <Link to="/login" onClick={handleLinkClick} className="text-primary font-bold">Log in</Link>
                            </p>
                        </div>
                    </>
                )}
             </div>
         </div>
      )}
    </nav>
  );
}