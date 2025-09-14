"use client";

import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CurrencyComparisonFormProps,
  CurrencyFormSchema,
  CurrencyFormValues,
} from "@/types/currency-form";
import { ArrowLeftRight, Loader2 } from "lucide-react";
import CurrencySelect from "./shared/CurrencySelect";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";

export const CurrencyComparisonForm: React.FC<CurrencyComparisonFormProps> = ({
  setCurrencyFormValues,
}) => {
  const queryClient = useQueryClient();

  const form = useForm<CurrencyFormValues>({
    resolver: zodResolver(CurrencyFormSchema) as Resolver<CurrencyFormValues>,
    defaultValues: {
      sendAmount: 1000,
      sourceCurrency: "USD",
      targetCurrency: "EUR",
    },
  });

  const watchedValues = form.watch();

  const onSubmit = (values: CurrencyFormValues) => {
    setCurrencyFormValues(values);
  };

  const queryKey = [
    "currencyComparison",
    watchedValues.sourceCurrency,
    watchedValues.targetCurrency,
    Number(watchedValues.sendAmount),
  ];

  const isFetching = useIsFetching({ queryKey }) > 0;
  const cachedData = queryClient.getQueryData(queryKey);
  const isCached = !!cachedData;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-16 p-6 rounded-2xl shadow-lg
            bg-card text-card-foreground max-w-3xl w-full"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <FormField
              control={form.control}
              name="sourceCurrency"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <div
                    className="mx-auto p-10 rounded-xl bg-muted/50
                      backdrop-blur-sm shadow-md text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-2">From</p>
                    <FormControl>
                      <CurrencySelect
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="USD"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              className="flex-shrink-0 flex items-center justify-center
                rounded-full bg-muted/60 p-3 shadow-md my-4 sm:my-0"
            >
              <ArrowLeftRight className="w-6 h-6 text-muted-foreground" />
            </div>

            <FormField
              control={form.control}
              name="targetCurrency"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <div
                    className="mx-auto p-10 rounded-xl bg-muted/50
                      backdrop-blur-sm shadow-md text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-2">To</p>
                    <FormControl>
                      <CurrencySelect
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="GBP"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="sendAmount"
            render={({ field }) => (
              <FormItem className="">
                <div className="w-full flex justify-center">
                  <FormLabel className="text-xl text-center">Amount</FormLabel>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    inputMode="decimal"
                    placeholder="Enter amount"
                    className="bg-input border border-border text-center
                      font-extrabold py-6 focus:ring-2 focus:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isFetching || isCached}
            className="w-full mt-2 bg-primary text-primary-foreground
              hover:bg-primary/90 py-6 text-lg font-semibold flex items-center
              justify-center gap-2"
          >
            {isFetching ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Fetching...
              </>
            ) : isCached ? (
              "Results cached for 5 mins"
            ) : (
              "Compare"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};
