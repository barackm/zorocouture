import React, { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-black text-white hover:bg-gray-900",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline:
    "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-50",
};

const Button = ({
  children,
  variant = "primary",
  icon = "→",
  className = "",
  onClick,
  href,
  fullWidth = false,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center gap-4 px-8 py-4 
    rounded-full transition-all duration-300 
    text-sm font-semibold
    ${variantStyles[variant]}
    ${fullWidth ? "w-full justify-center" : ""}
    ${
      disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "cursor-pointer"
    }
    ${className}
  `;

  const iconStyles =
    "transition-transform duration-300 group-hover:translate-x-2";

  if (href && !disabled) {
    return (
      <a href={href} className={`group ${baseStyles}`}>
        <span>{children}</span>
        <span className={iconStyles}>{icon}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseStyles}`}
    >
      <span>{children}</span>
      <span className={iconStyles}>{icon}</span>
    </button>
  );
};

export default Button;
