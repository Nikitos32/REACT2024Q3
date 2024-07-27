import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { MagnifyingGlass } from 'react-loader-spinner';
import { SelectedItem } from '../App';

interface SearchProps {
  handlePeople: (people: string) => void;
  currentPage: number;
  handleCurrentPage: (selectedItem: SelectedItem) => void;
}

export const Search = ({
  handlePeople,
  currentPage,
  handleCurrentPage,
}: SearchProps) => {
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>('');
  const { item, handleItem } = useLocalStorage();

  const fetchData = (request: string) => {
    setLoading(true);
    fetch(request)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        handlePeople(JSON.stringify(data));
        setLoading(false);
        handleItem(request);
      });
  };

  const fetchPage = (currentPage: number) => {
    fetchData(`https://swapi.dev/api/people/?page=${currentPage}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchData(`https://swapi.dev/api/people/?search=${input}`);
  };

  const handleInput = (e: ChangeEvent) => {
    setInput((e.target as HTMLInputElement).value.trim());
  };

  useEffect(() => {
    if (error) throw new Error();
    if (item) {
      fetchData(item);
    } else {
      fetchData(`https://swapi.dev/api/people/?search=${input}`);
    }
  }, [error]);

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage]);

  return (
    <>
      {loading && (
        <div className="w-full h-full flex absolute justify-center backdrop-blur-sm backdrop-brightness-75 items-center">
          <p>
            <MagnifyingGlass
              height="80"
              width="80"
              color="#e15b64"
              ariaLabel="loading"
            />
          </p>
        </div>
      )}
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
