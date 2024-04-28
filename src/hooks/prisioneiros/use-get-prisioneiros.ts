import CriminosoController, {
  TCriminoso,
} from "@/controllers/frontend/Criminoso";
import { TCriminosoFilter } from "@/services/models/Criminoso";
import { useEffect, useState } from "react";

function useGetPrisioneiros(filtro: Partial<TCriminosoFilter>) {
  const [criminosos, setCriminosos] = useState<TCriminoso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function criminosos() {
      setLoading(true);
      const controller = new CriminosoController();
      const result = await controller.obterTodos(filtro);

      setCriminosos((prev) => [...prev, ...result]);
      setLoading(false);
    }

    criminosos();
  }, []);

  return { criminosos, loading };
}

export { useGetPrisioneiros };
