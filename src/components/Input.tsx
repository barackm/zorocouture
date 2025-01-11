import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: string;
  textarea?: boolean;
  defaultValue?: string;
  placeholder?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  required = false,
  register,
  error,
  textarea = false,
  defaultValue,
  placeholder,
  icon,
  disabled = false,
}) => {
  const inputClasses = `
    w-full bg-gray-50 px-6 py-4 rounded-xl 
    outline-none focus:ring-2 focus:ring-black transition-all
    ${error ? "border-red-500 ring-red-500" : ""}
    ${icon ? "pr-12" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed bg-gray-100" : ""}
  `;

  return (
    <div className="relative">
      {label && (
        <label
          className={`block mb-2 text-sm text-gray-600 ${
            disabled ? "opacity-50" : ""
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          id={name}
          className={inputClasses}
          {...register(name, { required })}
          rows={6}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <div className="relative">
          <input
            type={type}
            id={name}
            className={inputClasses}
            {...register(name, { required })}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
          />
          {icon && (
            <span
              className={`absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 ${
                disabled ? "opacity-50" : ""
              }`}
            >
              {icon}
            </span>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
