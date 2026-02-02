import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function CarCard({ image, name, price, type }) {
  const navigate = useNavigate(); 

  return (
    <div className="group bg-white rounded-2xl w-full p-4 shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:bg-primary hover:border-primary cursor-pointer relative overflow-hidden">
      
      <div 
        onClick={() => navigate("/details")} 
        className="h-40 w-full flex items-center justify-center bg-bgLight rounded-xl mb-4 overflow-hidden relative transition-colors duration-300 group-hover:bg-white"
      >
        <img 
          src={image} 
          alt={name} 
          className="object-contain h-full w-full hover:scale-110 transition-transform duration-500" 
        />
      </div>
      
      <div className="flex-1">
        <p className="text-textLight text-sm mb-1 transition-colors duration-300 group-hover:text-red-100">
          {type}
        </p>
        <h3 
          onClick={() => navigate("/details")} 
          className="text-lg font-bold text-textMain mb-3 transition-colors duration-300 group-hover:text-white"
        >
          {name}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="text-sm text-textLight transition-colors duration-300 group-hover:text-red-100">
            Starting at
          </span>
          <p className="text-lg font-bold text-textMain transition-colors duration-300 group-hover:text-white">
            Rs {price}
            <span className="text-sm font-normal text-textLight transition-colors duration-300 group-hover:text-red-100">
              /day
            </span>
          </p>
        </div>
        
        <div className="w-24">
           <Button 
             childrenText="Rent" 
             height="h-9" 
             onClick={() => navigate("/details")} 
             className="text-sm rounded-full transition-colors hover:bg-white duration-300 group-hover:bg-white group-hover:text-primary"
           />
        </div>
      </div>
    </div>
  );
}