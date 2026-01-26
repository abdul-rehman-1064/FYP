import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { 
  FiGrid, FiList, FiCalendar, FiSettings, FiLogOut, 
  FiMenu, FiX, FiSearch, FiBell, FiChevronRight, FiTruck 
} from "react-icons/fi";

const sidebarLinks = [
  { name: "Dashboard", path: "/agency/dashboard", icon: FiGrid },
  { name: "Bookings", path: "/agency/bookings", icon: FiList },
  { name: "Fleet Management", path: "/agency/fleet", icon: FiTruck },
  { name: "Calendar", path: "/agency/calendar", icon: FiCalendar },
  { name: "Settings", path: "/agency/settings", icon: FiSettings },
];

export default function AgencyLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); 
  const [isCollapsed, setIsCollapsed] = useState(false);  
  const location = useLocation();

  const currentPage = location.pathname.split("/").pop().replace("-", " ");

  return (
    <div className="flex h-screen bg-[#F3F4F6] font-sans overflow-hidden">
      
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-100 shadow-2xl md:shadow-none transform transition-all duration-300 ease-in-out 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
        ${isCollapsed ? "md:w-20" : "md:w-72"} w-72`}
      >
        <div 
            className={`flex items-center h-20 border-b border-gray-50 transition-all duration-300 ${isCollapsed ? "justify-center px-0" : "justify-between px-8"}`}
        >
          <div 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className="cursor-pointer select-none"
            title="Click to toggle sidebar"
          >
             {isCollapsed ? (
                 <span className="text-2xl font-bold text-primary">D.</span>
             ) : (
                 <span className="text-2xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                    DRIVOXE<span className="text-primary">.</span>
                 </span>
             )}
          </div>

          <button 
            onClick={() => setSidebarOpen(false)} 
            className="md:hidden text-gray-400 hover:text-primary transition-colors p-1"
          >
            <FiX size={24} />
          </button>
        </div>

        <nav className={`space-y-2 h-[calc(100%-80px)] flex flex-col overflow-y-auto overflow-x-hidden ${isCollapsed ? "p-2 items-center" : "p-6"}`}>
          
          <div className="flex-1 space-y-2 w-full">
            {!isCollapsed && (
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mb-4 whitespace-nowrap animate-in fade-in duration-300">
                    Main Menu
                </p>
            )}
            
            {sidebarLinks.map((link) => {
              const isActive = location.pathname.includes(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)} 
                  title={isCollapsed ? link.name : ""}
                  className={`flex items-center rounded-xl transition-all duration-300 group font-medium
                    ${isCollapsed ? "justify-center w-12 h-12 p-0" : "gap-4 px-4 py-3.5 w-full"}
                    ${isActive 
                      ? "bg-primary text-white shadow-lg shadow-red-100" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <link.icon size={22} className={`transition-colors shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-primary"}`} />
                  
                  <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100 block"}`}>
                      {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={`pt-6 border-t border-gray-100 w-full ${isCollapsed ? "flex justify-center border-t-0" : ""}`}>
             <button 
                className={`flex items-center rounded-xl font-medium transition-all group text-gray-500 hover:bg-red-50 hover:text-red-600
                ${isCollapsed ? "justify-center w-12 h-12 p-0" : "gap-4 px-4 py-3.5 w-full"}`}
                title="Sign Out"
             >
                <FiLogOut size={22} className="text-gray-400 group-hover:text-red-500 transition-colors shrink-0" /> 
                <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100 block"}`}>
                    Sign Out
                </span>
             </button>
          </div>
        </nav>
      </aside>

      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${isCollapsed ? "md:ml-20" : "md:ml-72"}`}>
        
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between px-6 sm:px-8 sticky top-0 z-40">
            
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setSidebarOpen(true)} 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
                >
                    <FiMenu size={24} />
                </button>
                
                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                    <span>Pages</span>
                    <FiChevronRight size={14} />
                    <span className="font-semibold text-gray-900 capitalize">{currentPage || "Dashboard"}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
                
                <div className="hidden md:flex items-center bg-gray-100 px-4 py-2.5 rounded-full border border-transparent focus-within:border-primary/20 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 transition-all w-64">
                    <FiSearch className="text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Type here..." 
                        className="bg-transparent border-none focus:outline-none text-sm ml-3 w-full text-gray-700 placeholder-gray-400" 
                    />
                </div>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="text-right hidden lg:block">
                        <p className="text-sm font-bold text-gray-900 leading-none">Elite Rentals</p>
                        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide mt-1">Admin</p>
                    </div>
                    <div className="relative cursor-pointer hover:opacity-90 transition-opacity">
                        <img 
                            src="https://placehold.co/100x100" 
                            alt="Profile" 
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
                        />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className={`mx-auto space-y-6 transition-all duration-300 ${isCollapsed ? "max-w-screen-2xl" : "max-w-7xl"}`}>
                <Outlet />
            </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 md:hidden transition-opacity"
        ></div>
      )}
    </div>
  );
}