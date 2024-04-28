"use server";

import HistoricoCriminalController from "@/controllers/backend/HistoricoCriminal";
import { HistoricoCriminal } from "@/services/models/HistoricoCriminal";

async function cadastrarHistoricoCriminal(formData: FormData) {
  try {
    const controller = new HistoricoCriminalController();

    const historicoCriminal: HistoricoCriminal = {
      crime: formData.get("crime")?.toString()!,
      criminosoId: formData.get("criminosoID")?.toString()!,
      data_detencao: new Date(formData.get("data_detencao")?.toString()!),
      data_ocorrencia: new Date(formData.get("data_ocorrencia")?.toString()!),
      data_transferencia: new Date(
        formData.get("data_transferencia")?.toString()!
      ),
    };

    const res = await controller.salvar(historicoCriminal);
    return res;
  } catch (error) {
    return "Erro ao adicionar histórico";
  }
}

export { cadastrarHistoricoCriminal };
