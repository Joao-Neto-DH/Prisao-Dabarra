import React, { ComponentPropsWithRef } from "react";

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
        className="w-full block p-3 border rounded"
        required
        {...others}
      />
    </label>
  );
});

// function index({ className, label, name, ...others }: InputProps) {
//   return (
//     <label htmlFor={name} className="block">
//       <p className="mb-2">{label}</p>
//       <input
//         type="text"
//         name={name}
//         id={name}
//         className="w-full block p-3 border rounded"
//         required
//         {...others}
//       />
//     </label>
//   );
// }

export default index;
