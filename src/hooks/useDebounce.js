import { useEffect, useState } from "react";
export default function useDebounce(inittialvalue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inittialvalue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, inittialvalue]);
  return debounceValue;
}
