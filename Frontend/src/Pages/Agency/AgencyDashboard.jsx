import React from "react";
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler 
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { FiTrendingUp, FiCheckCircle, FiClock, FiActivity, FiMoreHorizontal, FiCalendar, FiDownload } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [12000, 19000, 15000, 28000, 24000, 32000, 45000],
      borderColor: "#ef4444",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(239, 68, 68, 0.2)");
        gradient.addColorStop(1, "rgba(239, 68, 68, 0)");
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#ef4444",
      pointBorderWidth: 2,
      pointRadius: 4,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1f2937",
      padding: 12,
      titleFont: { size: 13 },
      bodyFont: { size: 14, weight: "bold" },
      cornerRadius: 8,
      displayColors: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "#f3f4f6", borderDash: [5, 5] },
      ticks: { callback: (value) => `$${value / 1000}k`, color: "#9ca3af", font: { size: 11 } },
      border: { display: false },
    },
    x: {
      grid: { display: false },
      ticks: { color: "#9ca3af", font: { size: 11 } },
      border: { display: false },
    },
  },
};

const doughnutData = {
  labels: ["Rented", "Available", "Maintenance"],
  datasets: [
    {
      data: [65, 25, 10],
      backgroundColor: ["#ef4444", "#10b981", "#fbbf24"],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

const doughnutOptions = {
  cutout: "75%",
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1f2937",
      padding: 12,
      cornerRadius: 8,
    },
  },
};

const StatCard = ({ title, value, sub, icon: Icon, color, trend }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
                <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${trend === "up" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                        {trend === "up" ? <FiTrendingUp /> : <FiActivity />} {sub}
                    </span>
                    <span className="text-xs text-gray-400">vs last month</span>
                </div>
            </div>
            <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
                <Icon size={22} className={color.replace("bg-", "text-")} />
            </div>
        </div>
    </div>
);

const recentBookings = [
  { id: "#BK-9012", car: "Tesla Model 3", client: "Ali Raza", date: "Jan 24, 2026", status: "Active", amount: "$320" },
  { id: "#BK-9011", car: "Toyota Fortuner", client: "Sara Khan", date: "Jan 23, 2026", status: "Pending", amount: "$450" },
  { id: "#BK-9010", car: "Honda Civic", client: "John Doe", date: "Jan 22, 2026", status: "Completed", amount: "$120" },
];

export default function AgencyDashboard() {
  return (
    <div className="space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">Welcome back, here's what's happening with your fleet today.</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                    <FiCalendar size={16} /> Jan 2026
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-red-600 shadow-lg shadow-red-100 transition-colors">
                    <FiDownload size={16} /> Export Report
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Revenue" value="$84,250" sub="12.5%" trend="up" icon={FiActivity} color="bg-red-50 text-red-600" />
            <StatCard title="Total Bookings" value="1,245" sub="5.2%" trend="up" icon={FiCheckCircle} color="bg-blue-50 text-blue-600" />
            <StatCard title="Active Rentals" value="48" sub="2.4%" trend="down" icon={FiTrendingUp} color="bg-green-50 text-green-600" />
            <StatCard title="Pending Requests" value="12" sub="10%" trend="up" icon={FiClock} color="bg-orange-50 text-orange-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900">Revenue Analytics</h3>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"><FiMoreHorizontal /></button>
                </div>
                <div className="h-72">
                    <Line options={lineOptions} data={lineData} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900">Fleet Status</h3>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"><FiMoreHorizontal /></button>
                </div>
                <div className="h-56 flex justify-center relative">
                    <Doughnut options={doughnutOptions} data={doughnutData} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                        <span className="block text-3xl font-bold text-gray-900">89</span>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Total Cars</span>
                    </div>
                </div>
                <div className="mt-8 space-y-4">
                    <div className="flex justify-between text-sm items-center">
                        <span className="flex items-center gap-2 text-gray-600"><div className="w-2.5 h-2.5 rounded-full bg-primary"></div> Rented</span>
                        <span className="font-bold text-gray-900">65% <span className="text-gray-400 font-normal ml-1">(58)</span></span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                        <span className="flex items-center gap-2 text-gray-600"><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div> Available</span>
                        <span className="font-bold text-gray-900">25% <span className="text-gray-400 font-normal ml-1">(22)</span></span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                        <span className="flex items-center gap-2 text-gray-600"><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div> Maintenance</span>
                        <span className="font-bold text-gray-900">10% <span className="text-gray-400 font-normal ml-1">(9)</span></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900">Recent Bookings</h3>
                <button className="text-sm text-primary font-medium hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Booking ID</th>
                            <th className="px-6 py-4">Vehicle</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {recentBookings.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{item.id}</td>
                                <td className="px-6 py-4 text-gray-600">{item.car}</td>
                                <td className="px-6 py-4 text-gray-600">{item.client}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{item.date}</td>
                                <td className="px-6 py-4 font-bold text-gray-900">{item.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                        item.status === "Active" ? "bg-blue-50 text-blue-600" :
                                        item.status === "Completed" ? "bg-green-50 text-green-600" :
                                        "bg-orange-50 text-orange-600"
                                    }`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}