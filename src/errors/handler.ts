import { NextResponse } from "next/server";

export function errorHandler(error: any) {
  return NextResponse.json(
    { error: error.message },
    { status: error.status || 500 }
  );
}
