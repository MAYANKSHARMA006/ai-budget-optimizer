import { NextResponse } from "next/server";
import { getLatestAnalysis } from "@/lib/dashboard";

export async function GET() {
  const data = await getLatestAnalysis();

  return NextResponse.json({
    success: true,
    data,
  });
}