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
}: ButtonProps) => {
  const baseStyles = `
    inline-flex items-center gap-4 px-8 py-4 
    rounded-full transition-all duration-300 
    hover:gap-6 cursor-pointer text-sm font-semibold
    ${variantStyles[variant]}
    ${fullWidth ? "w-full justify-center" : ""}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        <span>{children}</span>
        <span>{icon}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      <span>{children}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Button;
