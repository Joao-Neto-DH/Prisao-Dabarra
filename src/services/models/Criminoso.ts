import Conexao from "@/modules/database/Conexao";
import IModel from "./IModel";
import { AppError } from "@/errors";
import { CRIMINOSO_POR_PAGINA } from "@/lib/Constants";

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

export type TCriminosoFilter = {
  nome: string;
  local: string;
  data_crime_ocorrido: string;
  data_crime_prisao: string;
  page: number;
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

  /**
   * obterTodos
   */
  public async obterTodos({
    page = 1,
    data_crime_ocorrido,
    data_crime_prisao,
    nome,
  }: Partial<TCriminosoFilter>) {
    try {
      const data = await this.conexao.getDB().criminoso.findMany({
        take: CRIMINOSO_POR_PAGINA,
        skip: (page - 1) * CRIMINOSO_POR_PAGINA,
        include: { _count: true, historico_criminal: true },
        where: {
          nome,

          // historico_criminal: {
          //   some: {
          //     data_ocorrencia: data_crime_ocorrido,
          //     data_detencao: data_crime_prisao,
          //   },
          // },
        },
      });

      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  public async obter(id: string) {
    try {
      const data = await this.conexao.getDB().criminoso.findUniqueOrThrow({
        include: {
          historico_criminal: { orderBy: { data_ocorrencia: "desc" } },
        },
        where: {
          id,
        },
      });

      return data;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }
}

export default CriminosoModel;
