import { NextResponse } from "next/server";
import { data } from "../../../db/data";

export async function GET() {
  return NextResponse.json(data);
}
