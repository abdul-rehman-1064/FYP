import React from "react";
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler 
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { FiUsers, FiDollarSign, FiCalendar, FiActivity, FiArrowUp, FiArrowDown, FiServer, FiCpu } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 10,
      cornerRadius: 8,
      displayColors: false,
    },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#9CA3AF" } },
    y: { grid: { color: "#E5E7EB", borderDash: [5, 5] }, ticks: { color: "#9CA3AF" }, border: { display: false } },
  },
};

const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
    label: "Total Revenue ($)",
    data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 42000, 48000, 52000, 60000],
    borderColor: "#DC2626", 
    backgroundColor: (context) => {
      const ctx = context.chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, "rgba(220, 38, 38, 0.2)");
      gradient.addColorStop(1, "rgba(220, 38, 38, 0)");
      return gradient;
    },
    tension: 0.4,
    fill: true,
    pointRadius: 0,
    pointHoverRadius: 6,
  }],
};

const bookingsData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [{
    label: "Bookings",
    data: [45, 60, 55, 70, 85, 100, 95],
    backgroundColor: "#111827", 
    borderRadius: 6,
    barThickness: 20,
  }],
};

const userSplitData = {
  labels: ["Customers", "Agencies"],
  datasets: [{
    data: [85, 15],
    backgroundColor: ["#111827", "#DC2626"],
    borderWidth: 0,
    hoverOffset: 4,
  }],
};

const StatCard = ({ title, value, sub, trend, icon: Icon }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
                <h3 className="text-3xl font-extrabold text-gray-900">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${trend === "up" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                <Icon size={24} />
            </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {trend === "up" ? <FiArrowUp /> : <FiArrowDown />} {sub}
            </span>
            <span className="text-xs text-gray-400 font-medium">vs last month</span>
        </div>
    </div>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Platform Analytics</h1>
                <p className="text-sm text-gray-500">Real-time monitoring of Drivoxe ecosystem.</p>
            </div>
            <div className="flex gap-2">
                <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 outline-none hover:border-red-500 transition-colors">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>This Year</option>
                </select>
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                    Download Report
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Revenue" value="$428.5k" sub="12.5%" trend="up" icon={FiDollarSign} />
            <StatCard title="Total Users" value="12,450" sub="8.2%" trend="up" icon={FiUsers} />
            <StatCard title="Total Bookings" value="3,890" sub="2.1%" trend="down" icon={FiCalendar} />
            <StatCard title="System Health" value="99.9%" sub="Stable" trend="up" icon={FiActivity} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 text-lg">Revenue Growth</h3>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span> Income
                        </span>
                    </div>
                </div>
                <div className="h-80">
                    <Line options={chartOptions} data={revenueData} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-6">User Demographics</h3>
                <div className="h-64 flex justify-center items-center relative">
                    <Doughnut 
                        data={userSplitData} 
                        options={{ cutout: "75%", plugins: { legend: { display: false } } }} 
                    />
                    <div className="absolute text-center">
                        <span className="block text-3xl font-bold text-gray-900">12k+</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Users</span>
                    </div>
                </div>
                <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                            <span className="text-sm font-medium text-gray-700">Customers</span>
                        </div>
                        <span className="font-bold text-gray-900">85%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                            <span className="text-sm font-medium text-gray-700">Agencies</span>
                        </div>
                        <span className="font-bold text-red-600">15%</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-6">Weekly Booking Activity</h3>
                <div className="h-64">
                    <Bar options={chartOptions} data={bookingsData} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-6">System & Server Health</h3>
                <div className="space-y-6">
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FiCpu className="text-gray-400" /> CPU Usage
                            </div>
                            <span className="text-sm font-bold text-gray-900">45%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full w-[45%]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FiServer className="text-gray-400" /> Memory Usage
                            </div>
                            <span className="text-sm font-bold text-gray-900">62%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full w-[62%]"></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FiActivity className="text-gray-400" /> Database Load
                            </div>
                            <span className="text-sm font-bold text-gray-900">28%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-red-500 h-2.5 rounded-full w-[28%]"></div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <span className="block text-xs text-gray-500 uppercase tracking-wider">API Latency</span>
                            <span className="text-lg font-bold text-gray-900">24ms</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <span className="block text-xs text-gray-500 uppercase tracking-wider">Error Rate</span>
                            <span className="text-lg font-bold text-green-600">0.01%</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  );
}