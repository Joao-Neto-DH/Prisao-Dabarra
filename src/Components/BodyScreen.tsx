import { ReactNode } from "react";

interface BodyScreenProps {
  children?: ReactNode;
}

function BodyScreen({ children }: BodyScreenProps) {
  return <div className="py-4 px-6">{children}</div>;
}

export default BodyScreen;
