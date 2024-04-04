import Conexao from "@/modules/database/Conexao";
import IModel from "./IModel";
import { AppError } from "@/errors";

export type HistoricoCriminal = {
  id?: string;
  crime: string;
  data_ocorrencia: Date;
  data_detencao: Date;
  data_transferencia: Date | null;
  criminosoId: string;
};

class HistoricoCriminalModel implements IModel<HistoricoCriminal> {
  private readonly conexao;

  constructor(conexao: Conexao) {
    this.conexao = conexao;
  }

  async salvar(obj: HistoricoCriminal): Promise<HistoricoCriminal> {
    try {
      const data = await this.conexao.getDB().historicoCriminal.create({
        data: obj,
      });

      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  async apagar(id: string): Promise<HistoricoCriminal> {
    try {
      const data = await this.conexao.getDB().historicoCriminal.delete({
        where: {
          id,
        },
      });
      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  async actualizar(
    obj: Partial<HistoricoCriminal>
  ): Promise<HistoricoCriminal> {
    try {
      const data = await this.conexao.getDB().historicoCriminal.update({
        data: obj,
        where: {
          id: obj.id,
        },
      });

      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }
}

export default HistoricoCriminalModel;
