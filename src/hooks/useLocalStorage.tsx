import { useEffect, useState } from 'react';

export const useLocalStorage = (): {
  item: string;
  handleItem: (URL: string) => void;
} => {
  const [item, setItem] = useState<string>(
    localStorage.getItem('lastRequest') as string
  );

  const handleItem = (URL: string) => {
    setItem(() => URL);
    console.log('state', item);
  };

  useEffect(() => {
    localStorage.setItem('lastRequest', item as string);
    return () => {
      localStorage.setItem('lastRequest', item as string);
    };
  }, [item]);

  return { item, handleItem };
};
