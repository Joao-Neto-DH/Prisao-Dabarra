import Conexao from "@/modules/database/Conexao";
import IModel from "./IModel";
import { AppError } from "@/errors";

export type Criminoso = {
  id?: string;
  nome: string;
  bi: string;
  nacionalidade: string;
  provincia: string;
  data_nascimento: Date;
  genero: string;
  imagem: string | null;
};

class CriminosoModel implements IModel<Criminoso> {
  private readonly conexao;

  constructor(conexao: Conexao) {
    this.conexao = conexao;
  }
  async salvar(obj: Criminoso): Promise<Criminoso> {
    try {
      const data = await this.conexao.getDB().criminoso.create({
        data: obj,
      });

      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  async apagar(id: string): Promise<Criminoso> {
    try {
      const data = await this.conexao.getDB().criminoso.delete({
        where: {
          id,
        },
      });
      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  async actualizar(obj: Partial<Criminoso>): Promise<Criminoso> {
    try {
      const data = await this.conexao.getDB().criminoso.update({
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

export default CriminosoModel;
