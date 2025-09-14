export interface CurrencyComparisonResult {
  sourceCurrency: string;
  targetCurrency: string;
  sendAmount: number;
  providers: Provider[];
}

export interface Provider {
  name: string;
  logoUrl: string;
  type: string;
  totalFee: number;
  exchangeRate: number;
  estimatedDelivery: string;
  amountReceived: number;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
}
