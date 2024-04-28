import CriminosoController, {
  TCriminoso,
} from "@/controllers/frontend/Criminoso";
import { useEffect, useState } from "react";

function useGetPrisioneiro(id: string) {
  const [prisioneiroID, setPrisioneiroID] = useState(id);
  const [prisioneiro, setPrisioneiro] = useState<TCriminoso>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPrisioneiro() {
      setLoading(true);
      const controller = new CriminosoController();
      const result = await controller.obter(prisioneiroID);

      setPrisioneiro(result);
      setLoading(false);
    }

    carregarPrisioneiro();
  }, [prisioneiroID]);

  return { prisioneiro, loading, setPrisioneiroID };
}

export { useGetPrisioneiro };
