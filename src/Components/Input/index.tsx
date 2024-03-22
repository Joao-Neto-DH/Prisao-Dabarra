import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentPropsWithRef<"input"> {
  label?: string;
}

const index = React.forwardRef<HTMLInputElement, InputProps>(function (
  { className, label, name, ...others },
  ref
) {
  return (
    <label htmlFor={name} className="block">
      <p className="mb-2">{label}</p>
      <input
        ref={ref}
        type="text"
        name={name}
        id={name}
        className={twMerge("w-full block p-3 border rounded", className)}
        required
        {...others}
      />
    </label>
  );
});

index.displayName = "Input";

export default index;
