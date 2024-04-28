"use server";

import CriminosoController from "@/controllers/backend/Criminoso";
import { Criminoso } from "@/services/models/Criminoso";

export async function cadastrarCriminoso(formData: FormData) {
  const controller = new CriminosoController();

  const criminoso: Criminoso = {
    nome: formData.get("nome")?.toString()!,
    bi: formData.get("bi")?.toString()!,
    genero: formData.get("genero")?.toString()!,
    imagem: formData.get("imagem")?.toString()!,
    nacionalidade: formData.get("nacionalidade")?.toString()!,
    provincia: formData.get("provincia")?.toString()!,
    data_nascimento: new Date(formData.get("data_nascimento")?.toString()!),
  };

  console.log(criminoso);

  try {
    return await controller.salvar(criminoso);
  } catch (error) {
    return "Erro ao cadastrar criminoso";
  }
}
