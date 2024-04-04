import CriminosoController from "@/controllers/backend/Criminoso";
import { errorHandler } from "@/errors/handler";
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

export { POST, DELETE, PUT };
