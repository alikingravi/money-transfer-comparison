import { z } from "zod";

export const CurrencyFormSchema = z
  .object({
    sendAmount: z.coerce
      .number()
      .min(0.01, { message: "Amount must be greater than 0" }),
    sourceCurrency: z.string().nonempty("Select a source currency"),
    targetCurrency: z.string().nonempty("Select a target currency"),
  })
  .refine((data) => data.sourceCurrency !== data.targetCurrency, {
    path: ["targetCurrency"],
    message: "Source and target currencies must be different",
  });

export type CurrencyFormValues = z.infer<typeof CurrencyFormSchema>;

export interface CurrencyComparisonFormProps {
  setCurrencyFormValues: (values: CurrencyFormValues) => void;
}
