import React, { use, useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { 
  FiGrid, FiUsers, FiLayers, FiCalendar, FiShield, FiActivity, FiLogOut, 
  FiMenu, FiX, FiSearch, FiBell, FiChevronRight, FiSettings 
} from "react-icons/fi";

const adminLinks = [
  { name: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
  { name: "User Management", path: "/admin/users", icon: FiUsers },
  { name: "Fleet Overview", path: "/admin/fleet", icon: FiLayers },
  { name: "All Bookings", path: "/admin/bookings", icon: FiCalendar },
  { name: "Audit Logs", path: "/admin/audit-logs", icon: FiShield },
  { name: "Automation Monitor", path: "/admin/automation", icon: FiActivity },
];

export default function AdminLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname.split("/").pop().replace("-", " ");

  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans overflow-hidden text-gray-800">
      
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-xl md:shadow-none transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-20 flex items-center justify-between px-8 border-b border-gray-100">
          <Link to="/" className="text-2xl font-extrabold text-gray-900 tracking-tighter">
             DRIVOXE<span className="text-red-600">.</span>
             <span className="block text-[10px] font-medium text-gray-400 tracking-widest uppercase -mt-1">Super Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-black">
            <FiX size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Platform Administration</p>
          
          {adminLinks.map((link) => {
            const isActive = location.pathname.includes(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-semibold transition-all duration-200 rounded-lg group
                  ${isActive 
                    ? "bg-gray-900 text-white shadow-md shadow-gray-300" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
              >
                <link.icon size={18} className={`${isActive ? "text-red-500" : "text-gray-400 group-hover:text-gray-900"}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3 px-2 mb-4">
                <img 
                    src="https://placehold.co/100x100/111827/ffffff?text=AD" 
                    alt="Admin" 
                    className="w-10 h-10 rounded-lg object-cover border border-gray-200" 
                />
                <div className="overflow-hidden">
                    <p className="text-sm font-bold text-gray-900 truncate">System Administrator</p>
                    <p className="text-xs text-gray-500 truncate">admin@drivoxe.com</p>
                </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all">
                <FiLogOut size={16} /> Sign Out
            </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-72 min-w-0 bg-[#F8F9FA]">
        
        <header className="h-20 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 px-6 sm:px-8 flex items-center justify-between">
            
            <div className="flex items-center gap-4">
                <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <FiMenu size={24} />
                </button>
                
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-gray-900 capitalize leading-none">{currentPage}</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>Admin</span> <FiChevronRight size={10} /> <span className="capitalize">{currentPage}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center bg-gray-100 hover:bg-white border border-transparent hover:border-gray-300 rounded-lg px-3 py-2 transition-all w-64 focus-within:bg-white focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100">
                    <FiSearch className="text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search system..." 
                        className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400" 
                    />
                </div>

                <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
                
                <button className="p-2.5 text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full border border-gray-200 transition-all shadow-sm" onClick={()=> navigate("/admin/settings")}>
                    <FiSettings size={18} />
                </button>
            </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                <Outlet />
            </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 md:hidden"></div>
      )}
    </div>
  );
}