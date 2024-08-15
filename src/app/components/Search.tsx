import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { SelectedItem } from '../constants/interfaces';
import { Loader } from './Loader';
import { useGetPageQuery, useGetPersonQuery } from '../api/apiSlice';
import { ThemeContext } from './App';
import classNames from 'classnames';

interface SearchProps {
  handlePeople: (people: string) => void;
  handleCurrentPage: (selectedItem: SelectedItem) => void;
  item: string;
  handleItem: (URL: string) => void;
  currentPage: number;
}

export const Search = ({
  handlePeople,
  handleCurrentPage,
  item,
  currentPage,
  handleItem,
}: SearchProps) => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const theme = useContext(ThemeContext);

  const { data: person, isLoading: isLoadingPerson } = useGetPersonQuery(input);
  const { data: page, isLoading: isLoadingPage } = useGetPageQuery(
    currentPage + 1
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handlePeople(JSON.stringify(person));
    if (!input) {
      handleCurrentPage({ selected: 0 });
    }
    handleItem(`https://swapi.dev/api/people/?search=${input}`);
  };

  const handleInput = (e: ChangeEvent) => {
    setInput((e.target as HTMLInputElement).value.trim());
  };

  useEffect(() => {
    if (error) throw new Error();
    if (item.includes('search')) {
      setInput(item.split('=')[1]);
      handlePeople(JSON.stringify(person));
    } else {
      handlePeople(JSON.stringify(page));
    }
  }, [error, page]);

  return (
    <>
      {(isLoadingPerson || isLoadingPage) && <Loader />}
      <div
        className={classNames(
          theme.theme === 'dark' && 'text-gray-500 bg-gray-900 border-gray-500',
          'flex p-5 justify-end'
        )}
      >
        <form
          className="flex gap-3"
          onSubmit={(e: FormEvent) => handleSubmit(e)}
        >
          <input
            id="searchItem"
            className={classNames(
              theme.theme === 'dark' &&
                'text-gray-500 bg-gray-900 border-gray-500',
              'border-b-2 outline-none border-black pl-2'
            )}
            type="search"
            placeholder="Search ..."
            onChange={(e: ChangeEvent) => handleInput(e)}
            value={input}
          />
          <button
            className={classNames(
              theme.theme === 'dark' && ' border-gray-500',
              'border border-black p-1 rounded-md hover:bg-orange-400 hover:text-white transition-colors ease-in-out duration-500'
            )}
            type="submit"
          >
            Search
          </button>
          <button
            aria-label="error-btn"
            className={classNames(
              theme.theme === 'dark' && ' border-gray-500',
              'border border-black p-1 rounded-md hover:bg-orange-400 hover:text-white transition-colors  ease-in-out duration-500'
            )}
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
