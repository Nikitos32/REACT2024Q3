import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface SearchProps {
  handlePeople: (people: string) => void;
}

export const Search = ({ handlePeople }: SearchProps) => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [lastSearch, setLastSearch] = useState<string>('');
  const { item } = useLocalStorage(lastSearch);

  const fetchData = (request: string) => {
    setLastSearch(request);
    fetch(request)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        handlePeople(JSON.stringify(data));
        setLoading(false);
      });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchData(`https://swapi.dev/api/people/?search=${input}`);
  };

  const handleInput = (e: ChangeEvent) => {
    setInput((e.target as HTMLInputElement).value.trim());
  };

  useEffect(() => {
    setLoading(true);
    console.log(item);
    if (item) {
      fetchData(item);
    } else {
      fetchData(`https://swapi.dev/api/people/?search=${input}`);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else
    return (
      <div>
        <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
          <input
            type="search"
            placeholder="Search ..."
            onChange={(e: ChangeEvent) => handleInput(e)}
            required={true}
          />
          <button type="submit">Search</button>
          <button
            type="button"
            onClick={() => {
              fetchData(`https://swapi.dev/api/people/`);
            }}
          >
            reset
          </button>
        </form>
        <button
          onClick={() => {
            throw new Error();
          }}
        >
          Throw an error
        </button>
      </div>
    );
};
