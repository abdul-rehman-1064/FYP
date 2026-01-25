import React, { useId, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = React.forwardRef(function Input(
    {
        label,
        type = "text",
        leftIcon = null,
        width = "w-auto",
        className = "",
        ...props
    },
    ref
) {
    const id = useId();
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const finalType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className={`${width} mb-3 mt-3`}>
            {label && (
                <label
                    className="inline-block font-medium text-textMain text-[14px] mb-1 pl-1"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <div className="relative">
                {leftIcon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
                        {leftIcon}
                    </span>
                )}

                <input
                    type={finalType}
                    id={id}
                    ref={ref}
                    {...props}
                    className={`px-3 py-2 rounded-lg bg-white text-textMain outline-none
                        border border-gray-300 w-full placeholder:font-normal placeholder:text-textLight
                        focus:border-primary hover:border-primary
                        duration-200
                        ${leftIcon ? "pl-10" : ""}
                        ${isPassword ? "pr-10" : ""}
                        ${className}`}
                />

                {isPassword && (
                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-textLight hover:text-primary transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </span>
                )}
            </div>
        </div>
    );
});

export default Input;