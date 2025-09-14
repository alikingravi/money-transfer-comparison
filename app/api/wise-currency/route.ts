import { withErrorHandling } from "@/api/utils/withErrorHandling";
import { apiGet } from "@/lib/axios-instance";
import { env } from "@/lib/env";
import { WiseCurrencyResponse } from "@/types/wise-response";
import { NextResponse } from "next/server";

export const GET = withErrorHandling(async () => {
  const response = await apiGet<WiseCurrencyResponse[]>(
    `${env.NEXT_PUBLIC_CURRENCY_API_URL}/currencies`,
  );

  return NextResponse.json(response);
});
