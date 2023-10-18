import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(debouncer);
  }, [value]);

  return debouncedValue;
};
