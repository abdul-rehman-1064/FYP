import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiPlay, FiRefreshCw, FiCheckCircle, FiXCircle, FiClock, FiCode } from "react-icons/fi";

const executionLogs = [
  { id: "EX-9921", status: "Success", duration: "240ms", time: "Jan 25, 10:30 AM", data: "{ email: 'sent', id: 402 }" },
  { id: "EX-9920", status: "Success", duration: "210ms", time: "Jan 25, 10:15 AM", data: "{ email: 'sent', id: 401 }" },
  { id: "EX-9919", status: "Failed", duration: "5s", time: "Jan 25, 09:45 AM", data: "{ error: 'SMTP Timeout' }" },
  { id: "EX-9918", status: "Success", duration: "235ms", time: "Jan 25, 09:00 AM", data: "{ email: 'sent', id: 399 }" },
];

export default function AutomationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
        
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                    <FiArrowLeft size={22} />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        Booking Confirmation Email
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-bold border border-green-200">Active</span>
                    </h1>
                    <p className="text-sm text-gray-500">ID: {id || "WF-001"} • Webhook Trigger</p>
                </div>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <FiCode /> Edit Workflow
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 shadow-sm shadow-red-100">
                    <FiPlay /> Run Manually
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-900">Execution History</h3>
                    <button className="text-sm text-red-600 font-medium hover:underline">Clear Logs</button>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                        <tr>
                            <th className="p-4">Status</th>
                            <th className="p-4">Execution ID</th>
                            <th className="p-4">Time</th>
                            <th className="p-4">Duration</th>
                            <th className="p-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {executionLogs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    {log.status === "Success" ? (
                                        <span className="flex items-center gap-2 text-green-600 font-bold text-sm">
                                            <FiCheckCircle /> Success
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 text-red-600 font-bold text-sm">
                                            <FiXCircle /> Failed
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 font-mono text-sm text-gray-600">{log.id}</td>
                                <td className="p-4 text-sm text-gray-500">{log.time}</td>
                                <td className="p-4 text-sm text-gray-500">{log.duration}</td>
                                <td className="p-4 text-right">
                                    {log.status === "Failed" ? (
                                        <button className="text-xs font-bold text-white bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-700 flex items-center gap-1 ml-auto">
                                            <FiRefreshCw size={12} /> Retry
                                        </button>
                                    ) : (
                                        <button className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">
                                            Details
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Performance</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-sm text-gray-500">Total Executions</span>
                            <span className="font-bold text-gray-900">1,240</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-sm text-gray-500">Success Rate</span>
                            <span className="font-bold text-green-600">99.8%</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                            <span className="text-sm text-gray-500">Avg Duration</span>
                            <span className="font-bold text-gray-900">240ms</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Last Error</span>
                            <span className="font-bold text-red-500 text-xs">2 hours ago</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-white">
                    <h3 className="font-bold mb-2 flex items-center gap-2"><FiCode /> JSON Payload</h3>
                    <p className="text-xs text-gray-400 mb-4">Sample input data for this workflow.</p>
                    <pre className="bg-black/50 p-3 rounded-lg text-xs font-mono text-green-400 overflow-x-auto">
{`{
  "booking_id": "BK-9021",
  "user_email": "ali@gmail.com",
  "status": "confirmed"
}`}
                    </pre>
                </div>
            </div>
        </div>
    </div>
  );
}