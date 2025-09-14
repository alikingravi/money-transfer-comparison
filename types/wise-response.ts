const sampleWiseComparisonResponse = {
  sourceCurrency: "GBP",
  targetCurrency: "EUR",
  sourceCountry: null,
  targetCountry: null,
  providerCountry: null,
  providerTypes: ["bank", "moneyTransferProvider"],
  amount: 10000.0,
  amountType: "SEND",
  providers: [
    {
      id: 5,
      alias: "rbs",
      name: "RBS",
      logos: {
        normal: {
          svgUrl: "https://dq8dwmysp7hk1.cloudfront.net/logos/rbs.svg",
          pngUrl: "https://dq8dwmysp7hk1.cloudfront.net/logos/rbs.png",
        },
        inverse: {
          svgUrl: null,
          pngUrl: null,
        },
        white: {
          svgUrl: "https://dq8dwmysp7hk1.cloudfront.net/logos/rbs--white.svg",
          pngUrl: "https://dq8dwmysp7hk1.cloudfront.net/logos/rbs--white.png",
        },
        circle: {
          svgUrl: "https://dq8dwmysp7hk1.cloudfront.net/logos/rbs-mark.svg",
          pngUrl: null,
        },
        altText: "RBS",
      },
      type: "bank",
      partner: false,
      quotes: [
        {
          rate: 1.1295450882,
          fee: 0.0,
          dateCollected: "2025-09-12T16:30:06.904925Z",
          sourceCountry: "GB",
          targetCountry: null,
          markup: 2.32819803,
          receivedAmount: 11295.45,
          sendAmount: null,
          deliveryEstimation: {
            providerGivesEstimate: true,
            duration: null,
          },
          isConsideredMidMarketRate: false,
        },
      ],
    },
  ],
} as const;

const sampleWiseCurrencyResponse = {
  code: "AED",
  symbol: "د.إ",
  name: "United Arab Emirates dirham",
  countryKeywords: ["AED", "AE", "are", "United Arab Emirates", "Dubai"],
  supportsDecimals: true,
} as const;

export type WiseComparisonResponse = typeof sampleWiseComparisonResponse;
export type WiseCurrencyResponse = typeof sampleWiseCurrencyResponse;
