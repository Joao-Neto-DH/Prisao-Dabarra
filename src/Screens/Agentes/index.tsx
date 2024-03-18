import BodyScreen from "@/Components/BodyScreen";
import Image from "next/image";

function AgentesScreens() {
  return (
    <div className="flex items-start">
      <BodyScreen className="inline-block w-1/4 border-r">
        <ul className="space-y-3">
          {new Array(6).fill("").map((_, idx) => (
            <li key={idx} className="border-b last:border-0 py-3">
              <button className="w-full text-left">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={"https://placehold.co/48"}
                      alt="64x64"
                      width={48}
                      height={48}
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-bold">João Baptista</p>
                    <p className="text-gray-500 text-xs">
                      12124 - Agente de trânsito
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </BodyScreen>
      <BodyScreen className="inline-block w-3/4">AgentesScreens</BodyScreen>
    </div>
  );
}

export default AgentesScreens;
