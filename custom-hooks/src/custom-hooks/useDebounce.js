import { useEffect, useState } from "react";

const useDebounce = (value, delay, callback = () => {}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== debouncedValue) {
        setDebouncedValue(value);
        callback();
      }
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, debouncedValue, callback]);

  return debouncedValue;
};

export default useDebounce;
