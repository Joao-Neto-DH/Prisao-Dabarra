import { AppError } from "@/errors";
import { isEmptyString } from "@/lib/utils";
import { criminosoModel } from "@/services/models";
import { Criminoso, TCriminosoFilter } from "@/services/models/Criminoso";

class CriminosoController {
  async salvar(data: Criminoso): Promise<Criminoso> {
    if (
      isEmptyString(data.bi) ||
      isEmptyString(new Date(data.data_nascimento).toDateString()) ||
      isEmptyString(data.genero) ||
      isEmptyString(data.nacionalidade) ||
      isEmptyString(data.nome) ||
      isEmptyString(data.provincia)
    ) {
      throw new AppError(
        `Os atributos nome, bi, nacionalidade, provincia, data_nascimento, genero não podem estar vazios`
      );
    }

    if (data.genero !== "H" && data.genero !== "M") {
      throw new AppError("O genero só pode ser H ou M");
    }

    return await criminosoModel.salvar(data);
  }

  async actualizar(data: Partial<Criminoso>): Promise<Criminoso> {
    if (
      isEmptyString(data.bi) &&
      isEmptyString(data.data_nascimento) &&
      isEmptyString(data.genero) &&
      isEmptyString(data.nacionalidade) &&
      isEmptyString(data.nome) &&
      isEmptyString(data.provincia)
    ) {
      throw new AppError(
        `Pelos menos um dos atributos nome, bi, nacionalidade, provincia, data_nascimento, genero deve estar preenchido`
      );
    }

    if (data.genero !== "H" && data.genero !== "M") {
      throw new AppError("O genero só pode ser H ou M");
    }

    return await criminosoModel.actualizar(data);
  }

  async obterTodos(filtro: Partial<TCriminosoFilter>) {
    return await criminosoModel.obterTodos(filtro);
  }

  async obter(id: string) {
    if (isEmptyString(id)) {
      throw new AppError("id não pode estar vazio");
    }
    return await criminosoModel.obter(id);
  }

  async apagar(data: string): Promise<Criminoso> {
    if (isEmptyString(data)) {
      throw new AppError("ID de criminoso não deve estar vazio");
    }

    return await criminosoModel.apagar(data);
  }
}

export default CriminosoController;
