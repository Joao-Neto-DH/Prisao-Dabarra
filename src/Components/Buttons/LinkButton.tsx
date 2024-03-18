import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends ComponentPropsWithoutRef<typeof Link> {}

function LinkButton({ children, className, ...others }: LinkProps) {
  return (
    <Link
      className={twMerge(
        "w-full text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors p-3 rounded",
        className
      )}
      {...others}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
