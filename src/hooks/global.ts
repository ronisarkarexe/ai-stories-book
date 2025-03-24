import { useEffect, useState } from "react";

interface Debounced {
  searchQuery: string;
  daley: number;
}

export const useDebounced = ({ searchQuery, daley }: Debounced) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchQuery);
    }, daley);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, daley]);
  return debouncedValue;
};
