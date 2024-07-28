import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SelectedItem } from '../constants/interfaces';
import { Loader } from './Loader';

interface SearchProps {
  handlePeople: (people: string) => void;
  handleCurrentPage: (selectedItem: SelectedItem) => void;
  item: string;
  handleItem: (URL: string) => void;
}

export const Search = ({
  handlePeople,
  handleCurrentPage,
  item,
  handleItem,
}: SearchProps) => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>('');

  const fetchData = async (request: string) => {
    setLoading(true);
    const data = await fetch(request)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setLoading(false);
        return data;
      });
    handlePeople(JSON.stringify(data));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleItem(`https://swapi.dev/api/people/?search=${input}`);
  };

  const handleInput = (e: ChangeEvent) => {
    setInput((e.target as HTMLInputElement).value.trim());
  };

  useEffect(() => {
    if (error) throw new Error();
    fetchData(item);
  }, [error, item]);

  return (
    <>
      {loading && <Loader />}
      <div className="flex p-5 justify-end">
        <form
          className="flex gap-3"
          onSubmit={(e: FormEvent) => handleSubmit(e)}
        >
          <input
            className="border-b-2 outline-none border-black pl-2"
            type="search"
            placeholder="Search ..."
            onChange={(e: ChangeEvent) => handleInput(e)}
            required={true}
            value={input}
          />
          <button className="border border-black p-1 rounded-md" type="submit">
            Search
          </button>
          <button
            className="border border-black p-1 rounded-md"
            type="button"
            onClick={() => {
              fetchData(`https://swapi.dev/api/people/`);
              handleCurrentPage({ selected: 0 });
              setInput('');
            }}
          >
            Reset Search
          </button>
          <button
            className="border border-black p-1 rounded-md"
            onClick={() => {
              setError('error');
            }}
          >
            Throw an error
          </button>
        </form>
      </div>
    </>
  );
};
