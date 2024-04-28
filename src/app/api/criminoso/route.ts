import CriminosoController from "@/controllers/backend/Criminoso";
import { errorHandler } from "@/errors/handler";
import { isEmptyString } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const service = new CriminosoController();
    const response = await service.salvar(data);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const service = new CriminosoController();
    const response = await service.actualizar(data);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

async function DELETE(request: NextRequest) {
  try {
    const { data } = await request.json();
    const service = new CriminosoController();
    const response = await service.apagar(data);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    const service = new CriminosoController();

    if (isEmptyString(id)) {
      const data_crime_ocorrido =
        request.nextUrl.searchParams.get("data_crime_ocorrido") || undefined;
      const data_crime_prisao =
        request.nextUrl.searchParams.get("data_crime_prisao") || undefined;
      const nome = request.nextUrl.searchParams.get("nome") || undefined;
      const page = Number(request.nextUrl.searchParams.get("page"));

      const response = await service.obterTodos({
        data_crime_ocorrido,
        data_crime_prisao,
        nome,
        page,
      });

      return NextResponse.json(response, { status: 200 });
    }

    const response = await service.obter(id!);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}

export { POST, DELETE, PUT, GET };
