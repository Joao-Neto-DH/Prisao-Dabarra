import React, { ComponentPropsWithRef } from "react";
import LinkButton from "./LinkButton";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithRef<"button"> {}

function Button({ children, className, ...others }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "w-full text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors p-3 rounded",
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
}

export default Button;
export { LinkButton };
