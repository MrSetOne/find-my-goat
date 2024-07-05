import { useState, useEffect, useCallback } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error(error);
    }
  }, [key, initialValue]);

  const setValue = useCallback(
    (newValue: T) => {
      try {
        const value = JSON.stringify(newValue);
        window.localStorage.setItem(key, value);
        setStoredValue(newValue);
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  return [storedValue, setValue];
};

export default useLocalStorage;
