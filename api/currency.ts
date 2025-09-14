import { apiGet } from "@/lib/axios-instance";
import { Currency, CurrencyComparisonResult } from "@/types/currency-result";
import { CurrencyFormValues } from "@/types/currency-form";
import {
  WiseComparisonResponse,
  WiseCurrencyResponse,
} from "@/types/wise-response";
import { parseIsoDuration } from "./utils/parse-iso-duration";

export const getCurrencyComparison = async ({
  sourceCurrency,
  targetCurrency,
  sendAmount,
}: CurrencyFormValues): Promise<CurrencyComparisonResult> => {
  const response = await apiGet<WiseComparisonResponse>("/wise-comparison", {
    params: { sourceCurrency, targetCurrency, sendAmount },
  });

  return {
    sourceCurrency: response.sourceCurrency,
    targetCurrency: response.targetCurrency,
    sendAmount: response.amount,
    providers: response.providers.map((p) => ({
      name: p.name,
      logoUrl: p.logos.normal.svgUrl || "",
      type: p.type,
      totalFee: p.quotes[0].fee,
      exchangeRate: p.quotes[0].rate,
      estimatedDelivery: parseIsoDuration(
        p.quotes[0]?.deliveryEstimation ?? null,
      ),
      amountReceived: p.quotes[0].receivedAmount,
    })),
  };
};

export const getCurrencies = async (): Promise<Currency[]> => {
  const response = await apiGet<WiseCurrencyResponse[]>("/wise-currency");

  return response.map((res) => ({
    code: res.code,
    symbol: res.symbol,
    name: res.name,
  }));
};
