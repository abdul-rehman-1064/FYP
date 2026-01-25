import React, { useState } from "react";
import { FiSend, FiCpu } from "react-icons/fi";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi Ali! I'm your Drivoxe AI Assistant. I can help you find the perfect car or check your booking status. How can I help today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, userMsg]);
    setInput("");

    setTimeout(() => {
        const botMsg = { id: Date.now() + 1, text: "I'm checking our fleet for you... Based on your preference for SUVs, I recommend the Zephyr A4 Stratos.", sender: "bot" };
        setMessages((prev) => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 h-[calc(100vh-80px)] flex flex-col">
       
       <div className="text-center mb-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
              <FiCpu size={24} />
          </div>
          <h1 className="text-2xl font-bold text-textMain">Drivoxe AI Assistant</h1>
          <p className="text-sm text-textLight">Powered by Gemini / OpenAI</p>
       </div>

       <div className="flex-1 bg-gray-50 rounded-2xl p-6 overflow-y-auto mb-4 border border-gray-200 shadow-inner space-y-4">
           {messages.map((msg) => (
               <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                   <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                       msg.sender === "user" 
                       ? "bg-primary text-white rounded-br-none" 
                       : "bg-white text-textMain border border-gray-200 rounded-bl-none shadow-sm"
                   }`}>
                       {msg.text}
                   </div>
               </div>
           ))}
       </div>

       <form onSubmit={handleSend} className="relative">
           <input 
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="e.g., I need a cheap SUV for a weekend trip to Murree..."
             className="w-full bg-white border border-gray-300 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-lg"
           />
           <button 
             type="submit"
             className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors"
           >
               <FiSend size={18} />
           </button>
       </form>
    </div>
  );
}