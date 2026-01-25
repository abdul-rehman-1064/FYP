import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import CarDetail from "./Pages/CarDetails";
import Signup from "./Pages/SignUp";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" element={<Cars />} />
        <Route path="details" element={<CarDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
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
    </Routes>
  );
}

export default App;