export interface DeliveryEstimation {
  providerGivesEstimate: boolean;
  duration: { min: string; max: string } | null;
}

export const parseIsoDuration = (
  deliveryEstimation: DeliveryEstimation | null
): string => {
  if (!deliveryEstimation || !deliveryEstimation.duration) return "N/A";

  const { min, max } = deliveryEstimation.duration;
  const parse = (iso: string | null) => {
    if (!iso) return "";
    const regex = /P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = iso.match(regex);
    if (!matches) return "";

    const days = matches[1]
      ? `${matches[1]} day${matches[1] !== "1" ? "s" : ""}`
      : "";
    const hours = matches[2]
      ? `${matches[2]} hr${matches[2] !== "1" ? "s" : ""}`
      : "";
    const minutes = matches[3] ? `${matches[3]} min` : "";
    const seconds = matches[4] ? `${matches[4]} sec` : "";

    return [days, hours, minutes, seconds].filter(Boolean).join(" ");
  };

  const minStr = parse(min);
  const maxStr = parse(max);

  return minStr === maxStr ? minStr || "N/A" : `${minStr} – ${maxStr}`;
};
