import { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BodyScreenProps extends ComponentPropsWithoutRef<"div"> {}

function BodyScreen({ children, className, ...others }: BodyScreenProps) {
  return (
    <div className={twMerge("py-4 px-6", className)} {...others}>
      {children}
    </div>
  );
}

export default BodyScreen;
