import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";
import { apiGet } from "@/lib/axios-instance";
import { WiseComparisonResponse } from "@/types/wise-response";
import { withErrorHandling } from "@/api/utils/withErrorHandling";

export const GET = withErrorHandling(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const sourceCurrency = searchParams.get("sourceCurrency");
  const targetCurrency = searchParams.get("targetCurrency");
  const sendAmount = searchParams.get("sendAmount");

  if (!sourceCurrency || !targetCurrency || !sendAmount) {
    return NextResponse.json(
      { error: "Missing query params" },
      { status: 400 },
    );
  }

  const response = await apiGet<WiseComparisonResponse>(
    `${env.NEXT_PUBLIC_COMPARISON_API_URL}/comparisons`,
    { params: { sourceCurrency, targetCurrency, sendAmount } },
  );

  return NextResponse.json(response);
});
