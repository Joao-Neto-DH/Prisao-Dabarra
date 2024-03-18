import React, { ComponentPropsWithRef } from "react";
import LinkButton from "./LinkButton";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithRef<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, className, ...others },
  ref
) {
  return (
    <button
      ref={ref}
      className={twMerge(
        "w-full text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors p-3 rounded",
        className
      )}
      {...others}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
export { LinkButton };
