import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Button({
    childrenText,
    loading = false,
    type = "button",
    height = "h-10",
    bgColor = "bg-primary",
    textColor = "text-white",
    hoverBgColor = "hover:bg-primary-hover",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            disabled={loading}
            className={`px-4 py-2 w-full font-semibold flex justify-center items-center transition-colors duration-200 hover:cursor-pointer
                ${bgColor} ${hoverBgColor} ${textColor} ${height} ${className}
                ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
            {...props}
        >
            {loading ? (
                <ClipLoader color="#ffffff" size={20} />
            ) : (
                childrenText
            )}
        </button>
    );
}