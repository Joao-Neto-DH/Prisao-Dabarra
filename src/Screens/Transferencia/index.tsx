"use client";

import BodyScreen from "@/Components/BodyScreen";
import Button from "@/Components/Buttons";
import { useGetPrisioneiro } from "@/hooks/prisioneiros/use-get-prisioneiro";
import { useGetPrisioneiros } from "@/hooks/prisioneiros/use-get-prisioneiros";
import { format } from "date-fns/format";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function TransferenciaScreen() {
  const { criminosos } = useGetPrisioneiros({ page: 1 });
  const router = useRouter();

  const searchParams = useSearchParams();
  const { prisioneiro, setPrisioneiroID, loading } = useGetPrisioneiro(
    searchParams.get("prisioneiro")!
  );

  return (
    <div className="flex">
      <BodyScreen className="inline-block w-1/4 border-r">
        <ul className="space-y-3">
          {criminosos.map((criminoso) => (
            <li key={criminoso.id} className="border-b last:border-0">
              <button
                onClick={() => {
                  router.push(`/transferencia?prisioneiro=${criminoso.id}`);
                  setPrisioneiroID(criminoso.id);
                }}
                className="w-full text-left hover:bg-gray-50 py-3"
              >
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
                    <p className="font-bold">{criminoso.nome}</p>
                    <p className="text-gray-500 text-xs">
                      Detento: {criminoso.id.split("-")[0]}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </BodyScreen>
      {!loading && prisioneiro !== undefined && (
        <BodyScreen className="inline-block w-3/4">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-6">{prisioneiro.nome}</h1>
              <table>
                <tbody>
                  <tr className="even:bg-gray-200">
                    <td>Detento:</td>
                    <td className="font-bold">
                      {prisioneiro.id.split("-")[0]}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>BI:</td>
                    <td className="font-bold uppercase">{prisioneiro.bi}</td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Nacionalidade:</td>
                    <td className="font-bold">{prisioneiro.nacionalidade}</td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Província:</td>
                    <td className="font-bold">{prisioneiro.provincia}</td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Data de nascimento:</td>
                    <td className="font-bold">
                      {format(prisioneiro.data_nascimento, "dd/mm/yyyy")}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Idade:</td>
                    <td className="font-bold">
                      {new Date().getFullYear() -
                        new Date(prisioneiro.data_nascimento).getFullYear()}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Gênero:</td>
                    <td className="font-bold">
                      {prisioneiro.genero.toLowerCase() === "m"
                        ? "Masculino"
                        : "Feminino"}
                    </td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Data de entrada:</td>
                    <td className="font-bold">18/03/2024</td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td>Crime:</td>
                    <td className="font-bold">Assalto a mão armada</td>
                  </tr>
                </tbody>
              </table>
              <hr className="my-6" />
              <p className="font-bold text-xl mb-3">Histórico criminal</p>
              <table>
                <thead>
                  <tr>
                    <th className="p-2 text-left">Crime</th>
                    <th className="p-2 text-left">Data de ocorrência</th>
                    <th className="p-2 text-left">Data de entrada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-200">
                    <td className="p-2">Assalto a mão armada</td>
                    <td className="p-2">18/02/2024</td>
                    <td className="p-2">18/03/2024</td>
                  </tr>
                  <tr className="even:bg-gray-200">
                    <td className="p-2">Assalto a mão armada</td>
                    <td className="p-2">18/02/2024</td>
                    <td className="p-2">18/03/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sticky top-0">
              <Image
                src={"https://placehold.co/400"}
                alt="detento: 000264"
                width={400}
                height={400}
                className="w-full rounded-lg"
                priority
              />
              <Button className="mt-3">Transferir detento</Button>
            </div>
          </div>
        </BodyScreen>
      )}
    </div>
  );
}

export default TransferenciaScreen;
