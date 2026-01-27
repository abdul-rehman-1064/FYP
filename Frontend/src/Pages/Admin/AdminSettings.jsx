import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { 
  FiSave, FiLock, FiGlobe, FiBell, FiShield, FiDatabase, FiMail, FiServer 
} from "react-icons/fi";

const SettingsSection = ({ title, icon: Icon, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-3">
      <div className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500">
        <Icon size={18} />
      </div>
      <h3 className="font-bold text-gray-900">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default function AdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
          <p className="text-sm text-gray-500">Configure global platform preferences and security.</p>
        </div>
        <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">Discard</button>
            <button className="px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors shadow-lg shadow-gray-200 flex items-center gap-2">
                <FiSave size={16} /> Save Changes
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
            
            <SettingsSection title="General Configuration" icon={FiGlobe}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Platform Name" defaultValue="Rentigo Admin" className="bg-white border-gray-300 focus:border-gray-500" />
                    <Input label="Support Email" defaultValue="support@rentigo.com" type="email" className="bg-white border-gray-300 focus:border-gray-500" />

                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1.5 pl-1">Timezone</label>
                        <select className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-gray-500 focus:ring-0 outline-none transition-all cursor-pointer">
                            <option>(GMT+05:00) Islamabad, Karachi</option>
                            <option>(GMT+00:00) UTC</option>
                            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                        </select>
                    </div>
                </div>
            </SettingsSection>

            <SettingsSection title="Security & Access" icon={FiShield}>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Two-Factor Authentication (2FA)</h4>
                            <p className="text-xs text-gray-500 mt-0.5">Require 2FA for all admin accounts.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900">Force Password Reset</h4>
                            <p className="text-xs text-gray-500 mt-0.5">Users must change password every 90 days.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>
            </SettingsSection>

            <SettingsSection title="Automation (n8n) Integration" icon={FiServer}>
                <div className="space-y-4">
                    <Input label="n8n Webhook URL" defaultValue="https://n8n.rentigo.com/webhook/..." className="bg-white border-gray-300 font-mono text-xs" />
                    <Input label="API Key" type="password" defaultValue="sk_live_51J..." className="bg-white border-gray-300 font-mono text-xs" />
                    <div className="flex justify-end">
                        <button className="text-xs font-bold text-blue-600 hover:underline">Test Connection</button>
                    </div>
                </div>
            </SettingsSection>
        </div>

        <div className="space-y-6">
            
            <SettingsSection title="Notifications" icon={FiBell}>
                <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <input 
                            type="checkbox" 
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications(!emailNotifications)}
                            className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" 
                        />
                        <span className="text-sm text-gray-700 font-medium">Email Alerts</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" defaultChecked />
                        <span className="text-sm text-gray-700 font-medium">System Downtime Alerts</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <input type="checkbox" className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900" />
                        <span className="text-sm text-gray-700 font-medium">New User Signups</span>
                    </label>
                </div>
            </SettingsSection>

            <SettingsSection title="Database & Backup" icon={FiDatabase}>
                <div className="space-y-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Last Backup</p>
                        <p className="text-sm font-mono text-gray-900">Jan 25, 03:00 AM</p>
                    </div>
                    <button className="w-full py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        Trigger Manual Backup
                    </button>
                </div>
            </SettingsSection>

            <div className="bg-red-50 rounded-xl border border-red-100 p-6">
                <h3 className="text-red-800 font-bold text-sm mb-2 flex items-center gap-2">
                    <FiLock /> Danger Zone
                </h3>
                <p className="text-xs text-red-600 mb-4">
                    Enable maintenance mode to disable user access temporarily.
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-red-800">Maintenance Mode</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={maintenanceMode}
                            onChange={() => setMaintenanceMode(!maintenanceMode)}
                        />
                        <div className="w-9 h-5 bg-red-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}