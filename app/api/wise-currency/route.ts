import { apiGet } from "@/lib/axios-instance";
import { env } from "@/lib/env";
import { WiseCurrencyResponse } from "@/types/wise-response";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await apiGet<WiseCurrencyResponse[]>(
      `${env.NEXT_PUBLIC_CURRENCY_API_URL}/currencies`,
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching currency data:", error);
    return NextResponse.json(
      { error: "Failed to fetch currency data" },
      { status: 500 },
    );
  }
}
