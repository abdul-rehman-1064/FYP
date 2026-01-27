import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import CarDetails from "./Pages/CarDetails";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";

import CustomerDashboard from "./Pages/CustomerDashboard";
import AIChat from "./Pages/AIChat";
import MyBookings from "./Pages/MyBookings";
import UserProfile from "./Pages/UserProfile";
import NotificationPreferences from "./Pages/NotificationPreferences";

import BookingForm from "./Pages/BookingForm";
import Payment from "./Pages/Payment";
import BookingSuccess from "./Pages/BookingSuccess";
import BookingDetails from "./Pages/BookingDetails";
import AgencyLayout from "./components/AgencyLayout";
import AgencyDashboard from "./Pages/Agency/AgencyDashboard";
import FleetManagement from "./Pages/Agency/FleetManagement";
import AddEditVehicle from "./Pages/Agency/AddEditVehicle";
import AgencyBookings from "./Pages/Agency/AgencyBookings";
import AgencyCalendar from "./Pages/Agency/AgencyCalendar";
import AgencySettings from "./Pages/Agency/AgencySettings";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import UserManagement from "./Pages/Admin/UserManagement";
import AdminFleet from "./Pages/Admin/AdminFleet";
import AdminBookings from "./Pages/Admin/AdminBookings";
import AuditLogs from "./Pages/Admin/AuditLogs";
import AutomationMonitor from "./Pages/Admin/AutomationMonitor";
import AutomationDetails from "./Pages/Admin/AutomationDetails";
import AdminSettings from "./Pages/Admin/AdminSettings";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="service" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="details" element={<CarDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="ai-chat" element={<AIChat />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="notifications" element={<NotificationPreferences />} />

        
        <Route path="booking-form" element={<BookingForm />} />
        <Route path="payment" element={<Payment />} />
        <Route path="booking-success" element={<BookingSuccess />} />
        
        <Route path="booking/:id" element={<BookingDetails />} />

      </Route>

      <Route path="/agency" element={<AgencyLayout />}>
         <Route index element={<AgencyDashboard />} />
         <Route path="dashboard" element={<AgencyDashboard />} />
         <Route path="fleet" element={<FleetManagement />} />
         <Route path="add-vehicle" element={<AddEditVehicle />} />
         <Route path="edit-vehicle/:id" element={<AddEditVehicle />} />
         <Route path="bookings" element={<AgencyBookings />} />
         <Route path="booking/:id" element={<BookingDetails />} />
         <Route path="calendar" element={<AgencyCalendar />} />
         <Route path="settings" element={<AgencySettings />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="users" element={<UserManagement />} />
    <Route path="fleet" element={<AdminFleet />} />
    <Route path="bookings" element={<AdminBookings />} />
    <Route path="audit-logs" element={<AuditLogs />} />
    <Route path="automation" element={<AutomationMonitor />} />
    <Route path="automation/:id" element={<AutomationDetails />} />
    <Route path="settings" element={<AdminSettings />} />
</Route>
    </Routes>
  );
}

export default App;