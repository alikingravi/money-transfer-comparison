import { ENV } from "@/lib/env";

declare namespace NodeJS {
  interface ProcessEnv extends Env {}
}
