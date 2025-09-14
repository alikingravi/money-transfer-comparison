import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_COMPARISON_API_URL: z.string(),
  NEXT_PUBLIC_CURRENCY_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
