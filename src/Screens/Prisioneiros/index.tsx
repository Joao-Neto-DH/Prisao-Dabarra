"use client";

import BodyScreen from "@/Components/BodyScreen";
import Button from "@/Components/Buttons";
import Input from "@/Components/Input";
import Loader from "@/Components/Loader";
import Image from "next/image";
import Link from "next/link";
import ModalFiltro from "./ModalFiltro";

function PrisioneiroScreen() {
  return (
    <>
      <div className="flex items-center border-b p-4">
        <div className="w-1/2 flex items-end">
          <form action="#" className="w-full flex flex-row items-end">
            <div className="w-full">
              <Input
                type="text"
                className="py-2 w-full text-sm"
                placeholder="Nome do prisioneiro"
              />
            </div>
            <button className="p-2 rounded border ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 fill-slate-400"
                viewBox="0 0 24 24"
              >
                <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.133-7 7 3.133 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path>
              </svg>
            </button>
          </form>
          <ModalFiltro />
        </div>
        <Button className="w-auto ml-auto text-sm py-1 px-2">
          Cadastrar prisioneiro
        </Button>
      </div>
      <BodyScreen>
        <div className="grid md:grid-cols-5 gap-3">
          {new Array(10).fill("").map((_, idx) => (
            <div key={idx} className="">
              <Link href={`/transferencia?prisioneiro=55`}>
                <Image
                  src={"https://placehold.co/240"}
                  alt="240x240"
                  width={240}
                  height={240}
                  loading="lazy"
                  className="rounded-t"
                />
              </Link>

              <Link
                href={`/transferencia?prisioneiro=55`}
                className="font-bold text-lg text-center mt-2 block"
              >
                João Baptista
              </Link>
              <p className="mt-1 text-center">
                Idade: <span className="font-bold text-sm">23</span>
              </p>
            </div>
          ))}
        </div>
      </BodyScreen>
    </>
  );
}

export default PrisioneiroScreen;
