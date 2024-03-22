"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navs: { name: string; path: string }[] = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Agentes",
    path: "/agentes",
  },
  {
    name: "Transferências",
    path: "/transferencia",
  },
  {
    name: "Prisioneiros",
    path: "/prisioneiros",
  },
];

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="p-4 flex items-center border-b sticky top-0 z-50">
      <div className="">
        <p className="text-xl font-bold">Esquadra 47</p>
        <p className="text-xs text-gray-400">São Pedro da Barra</p>
      </div>
      <ul className="flex flex-row items-center ml-auto space-x-2">
        {navs.map((nav) => (
          <li key={nav.path}>
            <Link
              className={pathname === nav.path ? "text-red-600 font-bold" : ""}
              href={nav.path}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
