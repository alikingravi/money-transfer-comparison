import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";
import { apiGet } from "@/lib/axios-instance";
import { WiseComparisonResponse } from "@/types/wise-response";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sourceCurrency = searchParams.get("sourceCurrency");
    const targetCurrency = searchParams.get("targetCurrency");
    const sendAmount = searchParams.get("sendAmount");

    if (!sourceCurrency || !targetCurrency || !sendAmount) {
      return NextResponse.json(
        { error: "Missing required query parameters" },
        { status: 400 },
      );
    }
    const response = await apiGet<WiseComparisonResponse>(
      `${env.NEXT_PUBLIC_COMPARISON_API_URL}/comparisons`,
      {
        params: {
          sourceCurrency,
          targetCurrency,
          sendAmount,
        },
      },
    );

    return NextResponse.json(response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching comparison data:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.error("Unknown error fetching comparison data:", error);
    return NextResponse.json(
      { error: "Failed to fetch comparison data" },
      { status: 500 },
    );
  }
}
