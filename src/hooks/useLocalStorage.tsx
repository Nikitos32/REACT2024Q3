import { useEffect, useState } from 'react';

export const useLocalStorage = (
  lastSearch: string
): {
  item: string;
} => {
  const [item, setItem] = useState<string>('');
  console.log(lastSearch);
  const setLocalStorageItem = (lastSearch: string) => {
    localStorage.setItem('lastRequest', lastSearch as string);
  };

  useEffect(() => {
    setItem(localStorage.getItem('lastRequest') as string);
    return () => {
      setLocalStorageItem(lastSearch);
    };
  }, [lastSearch]);

  return { item };
};
