import { Criminoso, TCriminosoFilter } from "@/services/models/Criminoso";

export type TCriminoso = {
  id: string;
  nome: string;
  bi: string;
  nacionalidade: string;
  provincia: string;
  data_nascimento: string;
  genero: string;
  imagem: string | null;
  _count: {
    historico_criminal: number;
  };
  historico_criminal: any[];
};

class CriminosoController {
  private static readonly url = "/api/criminoso";
  async salvar(criminoso: Criminoso): Promise<Criminoso> {
    const res = await fetch(`${CriminosoController.url}`, {
      method: "POST",
      body: JSON.stringify(criminoso),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  }

  async actualizar(criminoso: Partial<Criminoso>): Promise<Criminoso> {
    const res = await fetch(`${CriminosoController.url}`, {
      method: "PUT",
      body: JSON.stringify(criminoso),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  }

  async obterTodos(filtro: Partial<TCriminosoFilter>): Promise<TCriminoso[]> {
    const searchParams = new URLSearchParams();

    Object.entries(filtro).forEach((entry) => {
      const key = entry[0];
      const value = entry[1];

      searchParams.append(key, value.toString());
    });

    const res = await fetch(
      `${CriminosoController.url}?${searchParams.toString()}`
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  }

  async obter(id: string) {
    const res = await fetch(`${CriminosoController.url}?id=${id}`);

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  }

  async apagar(id: string): Promise<Criminoso> {
    const res = await fetch(`${CriminosoController.url}`, {
      method: "DELETE",
      body: JSON.stringify({ data: id }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    return data;
  }
}

export default CriminosoController;
