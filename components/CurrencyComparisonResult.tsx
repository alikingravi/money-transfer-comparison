"use client";

import { useQuery } from "@tanstack/react-query";
import { getCurrencyComparison } from "@/api/currency";
import { CurrencyFormValues } from "@/types/currency-form";
import { CurrencyComparisonResult as CurrencyComparisonResultInterface } from "@/types/currency-result";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { NoData } from "./errors/NoData";
import { ErrorPage } from "./errors/ErrorPage";

export const CurrencyComparisonResult: React.FC<CurrencyFormValues> = ({
  sendAmount,
  sourceCurrency,
  targetCurrency,
}: CurrencyFormValues) => {
  const { data, isLoading, isError, error } = useQuery<
    CurrencyComparisonResultInterface,
    Error
  >({
    queryKey: [
      "currencyComparison",
      sourceCurrency,
      targetCurrency,
      sendAmount,
    ],
    queryFn: () =>
      getCurrencyComparison({ sendAmount, sourceCurrency, targetCurrency }),
    enabled: !!sendAmount && !!sourceCurrency && !!targetCurrency,
    staleTime: 5000 * 60, // 5 minutes
    retry: 0,
  });

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        <Skeleton className="w-full h-60 rounded-lg" />
        <Skeleton className="w-full h-60 rounded-lg" />
        <Skeleton className="w-full h-60 rounded-lg" />
        <Skeleton className="w-full h-60 rounded-lg" />
      </div>
    );
  }

  if (isError) {
    return <ErrorPage message={error?.message || "Failed to load data."} />;
  }

  if (!data || data.providers.length === 0) {
    return <NoData />;
  }

  return (
    <div
      className="w-full max-w-3xl p-6 bg-white dark:bg-gray-900 rounded-lg
        shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Comparison Result
      </h2>

      <div
        className="flex justify-between font-bold text-gray-600
          dark:text-gray-300"
      >
        <span>From: {data.sourceCurrency}</span>
        <span>To: {data.targetCurrency}</span>
        <span>Amount: {data.sendAmount}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:p-6">
        {data.providers.map((provider) => (
          <div
            key={provider.name}
            className="flex flex-col items-center justify-between p-10
              bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm"
          >
            <div
              className="flex flex-col items-center gap-4 bg-white
                dark:bg-slate-800 p-4 rounded-md shadow-sm md:w-64 h-40 mb-2"
            >
              {provider.logoUrl && (
                <Image
                  src={provider.logoUrl}
                  alt={provider.name}
                  width={150}
                  height={150}
                  className="mb-5"
                />
              )}
              <div className="mb-10">
                <p className="font-semibold">{provider.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {provider.type}
                </p>
              </div>
            </div>

            <div
              className="bg-white dark:bg-slate-800 text-xs md:text-sm space-y-1
                p-6 rounded-md shadow-sm md:w-64 h-40"
            >
              <p>
                <strong>Received Amount:</strong>{" "}
                {provider.amountReceived.toLocaleString()}
              </p>
              <p>
                <strong>Total Fee:</strong> {provider.totalFee.toFixed(2)}
              </p>
              <p>
                <strong>Exchange Rate:</strong>{" "}
                {provider.exchangeRate.toFixed(4)}
              </p>
              <p>
                <strong>Est Delivery:</strong> {provider.estimatedDelivery}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
