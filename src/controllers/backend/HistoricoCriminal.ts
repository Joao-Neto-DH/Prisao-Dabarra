import { AppError } from "@/errors";
import { isEmptyString } from "@/lib/utils";
import { historicoCriminal } from "@/services/models";
import { HistoricoCriminal } from "@/services/models/HistoricoCriminal";

class HistoricoCriminalController {
  async salvar(data: HistoricoCriminal): Promise<HistoricoCriminal> {
    if (
      isEmptyString(data.crime) ||
      isEmptyString(data.criminosoId) ||
      isEmptyString(data.data_detencao) ||
      isEmptyString(data.data_ocorrencia)
      // isEmptyString(data.data_transferencia)
    ) {
      throw new AppError(
        `Os atributos crime, criminosoId, data_detencao, data_ocorrencia, data_transferencia não podem estar vazios`
      );
    }

    return await historicoCriminal.salvar(data);
  }

  async actualizar(
    data: Partial<HistoricoCriminal>
  ): Promise<HistoricoCriminal> {
    if (
      isEmptyString(data.crime) &&
      isEmptyString(data.criminosoId) &&
      isEmptyString(data.data_detencao) &&
      isEmptyString(data.data_ocorrencia)
      // isEmptyString(data.data_transferencia)
    ) {
      throw new AppError(
        `Pelos menos um dos atributos crime, criminosoId, data_detencao, data_ocorrencia, data_transferencia deve estar preenchido`
      );
    }

    return await historicoCriminal.actualizar(data);
  }

  async apagar(data: string): Promise<HistoricoCriminal> {
    if (isEmptyString(data)) {
      throw new AppError("ID de histórico criminal não deve estar vazio");
    }

    return await historicoCriminal.apagar(data);
  }
}

export default HistoricoCriminalController;
