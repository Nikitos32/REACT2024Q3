import { useEffect, useState } from 'react';

export const useLocalStorage = (): {
  item: string;
  handleItem: (URL: string) => void;
} => {
  const [item, setItem] = useState<string>(
    localStorage.getItem('lastRequest')
      ? (localStorage.getItem('lastRequest') as string)
      : 'https://swapi.dev/api/people/?page=1'
  );

  const handleItem = (URL: string) => {
    setItem(URL);
  };

  useEffect(() => {
    localStorage.setItem('lastRequest', item as string);
    return () => {
      localStorage.setItem('lastRequest', item as string);
    };
  }, [item]);

  return { item, handleItem };
};
