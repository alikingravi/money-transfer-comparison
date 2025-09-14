import { getCurrencies } from "@/api/currency";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Currency } from "@/types/currency-result";

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CurrencySelect({
  value,
  onChange,
  placeholder,
}: CurrencySelectProps) {
  const { data, isLoading, isError, error } = useQuery<Currency[], Error>({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
    retry: 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error?.message}</div>;
  }

  if (!data) {
    return null;
  }

  const selected = data.find((c) => c.code === value);

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className="text-2xl font-bold bg-transparent border-none shadow-none
          focus:ring-0 focus:outline-none"
      >
        {selected ? (
          <span>
            {selected.symbol !== selected.code
              ? `${selected.symbol} ${selected.code}`
              : selected.code}
          </span>
        ) : (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>

      <SelectContent>
        {data.map((currency) => {
          return (
            <SelectItem key={currency.code} value={currency.code}>
              {currency.symbol} {currency.code} - {currency.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
