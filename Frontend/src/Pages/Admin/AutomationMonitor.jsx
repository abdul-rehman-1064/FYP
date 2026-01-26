import React from "react";
import { Link } from "react-router-dom";
import { FiActivity, FiPlay, FiClock, FiCheckCircle, FiAlertTriangle, FiArrowRight, FiZap } from "react-icons/fi";

const workflows = [
  { id: "WF-001", name: "Booking Confirmation Email", trigger: "Webhook", lastRun: "2 mins ago", status: "Healthy", successRate: "99.8%", executions: 1240 },
  { id: "WF-002", name: "Invoice Generation PDF", trigger: "Payment Success", lastRun: "15 mins ago", status: "Healthy", successRate: "98.5%", executions: 850 },
  { id: "WF-003", name: "Payment Reminder SMS", trigger: "Cron (Daily)", lastRun: "5 hours ago", status: "Degraded", successRate: "85.0%", executions: 45 },
  { id: "WF-004", name: "Fleet Maintenance Alert", trigger: "DB Event", lastRun: "1 day ago", status: "Healthy", successRate: "100%", executions: 12 },
];

export default function AutomationMonitor() {
  return (
    <div className="space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <FiZap size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Active Workflows</p>
                    <h3 className="text-2xl font-bold text-gray-900">12</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <FiCheckCircle size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Success Rate (24h)</p>
                    <h3 className="text-2xl font-bold text-gray-900">98.2%</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                    <FiAlertTriangle size={24} />
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Failed Jobs</p>
                    <h3 className="text-2xl font-bold text-gray-900">3</h3>
                </div>
            </div>
        </div>

        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">n8n Workflows</h2>
                <button className="text-sm font-medium text-red-600 hover:text-red-700">View All in n8n Editor</button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {workflows.map((wf) => (
                        <div key={wf.id} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-50 transition-colors gap-4">
                            
                            <div className="flex items-start gap-4">
                                <div className={`mt-1 w-3 h-3 rounded-full ${wf.status === "Healthy" ? "bg-green-500" : "bg-orange-500"}`}></div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        {wf.name}
                                        <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] uppercase font-bold tracking-wide">
                                            {wf.id}
                                        </span>
                                    </h3>
                                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><FiZap size={14} /> {wf.trigger}</span>
                                        <span className="flex items-center gap-1"><FiClock size={14} /> Last run: {wf.lastRun}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Success Rate</p>
                                    <p className={`font-bold ${wf.successRate === "100%" ? "text-green-600" : "text-gray-900"}`}>{wf.successRate}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Executions</p>
                                    <p className="font-bold text-gray-900">{wf.executions}</p>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors" title="Trigger Manually">
                                        <FiPlay size={18} />
                                    </button>
                                    <Link 
                                        to={`/admin/automation/${wf.id}`} 
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        Details <FiArrowRight />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}