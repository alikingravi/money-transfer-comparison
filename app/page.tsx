"use client";

import React, { useState } from "react";
import { CurrencyComparisonForm } from "@/components/CurrencyComparisonForm";
import { CurrencyComparisonResult } from "@/components/CurrencyComparisonResult";
import { CurrencyFormValues } from "@/types/currency-form";

export default function Home() {
  const [currencyFormValues, setCurrencyFormValues] =
    useState<CurrencyFormValues | null>(null);
  return (
    <div className="font-sans p-8 sm:p-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Money Comparison Form
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Quickly compare exchange rates and find the best value for your money.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full my-12">
        <hr className="border-t border-border" />
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <CurrencyComparisonForm setCurrencyFormValues={setCurrencyFormValues} />
      </div>

      <div className="max-w-3xl mx-auto w-full my-12">
        <hr className="border-t border-border" />
      </div>

      <div className="max-w-3xl mx-auto w-full">
        {currencyFormValues ? (
          <React.Suspense fallback={<div>Loading conversion result...</div>}>
            <CurrencyComparisonResult {...currencyFormValues} />
          </React.Suspense>
        ) : (
          <p className="text-center text-muted-foreground">
            Enter details above to see results.
          </p>
        )}
      </div>
    </div>
  );
}
