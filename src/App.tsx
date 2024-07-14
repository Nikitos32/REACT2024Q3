import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Search } from './components/Search';
import { ItemList } from './components/ItemList';

export const App = () => {
  const [starWarsPeople, setStarWarsPeople] = useState<string>();

  const handlePeople = (people: string) => {
    setStarWarsPeople(people);
  };

  return (
    <ErrorBoundary fallback={<p>Ooops...</p>}>
      <Search handlePeople={handlePeople} />
      <ItemList
        results={starWarsPeople ? JSON.parse(starWarsPeople).results : ''}
      />
    </ErrorBoundary>
  );
};
