import ReactPaginate from 'react-paginate';
import ErrorBoundary from '../components/ErrorBoundary';
import { ItemList } from '../components/ItemList';
import { Search } from '../components/Search';
import { useContext, useEffect, useState } from 'react';
import { SelectedItem } from '../constants/interfaces';
import { IoIosWarning } from 'react-icons/io';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Flyout } from '../components/Flyout';
import { ThemeContext } from '../App';
import classNames from 'classnames';

export const MainPage = () => {
  const [starWarsPeople, setStarWarsPeople] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const params = useParams();
  const { item, handleItem } = useLocalStorage();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (params.page) {
      setCurrentPage(+params.page - 1);
    }
  }, [params]);

  const handlePeople = (people: string) => {
    setStarWarsPeople(people);
  };

  const handleCurrentPage = (selectedItem: SelectedItem) => {
    navigate(`/page/${selectedItem.selected + 1}`);
    setCurrentPage(selectedItem.selected);
    handleItem(
      `https://swapi.dev/api/people/?page=${selectedItem.selected + 1}`
    );
  };

  return (
    <ErrorBoundary
      fallback={
        <p
          className={classNames(
            theme.theme === 'light'
              ? `text-red-500 `
              : 'text-gray-500 bg-gray-900',
            'flex justify-center items-center h-full gap-5 font-semibold text-2xl flex-col'
          )}
        >
          Something went wrong! <IoIosWarning size={100} />
        </p>
      }
    >
      <Search
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        item={item}
        handlePeople={handlePeople}
        handleItem={handleItem}
      />
      <ItemList
        results={starWarsPeople ? JSON.parse(starWarsPeople).results : ''}
      />
      <Outlet />
      <ReactPaginate
        previousClassName="select-none"
        nextClassName="select-none"
        activeLinkClassName={classNames(
          theme.theme === 'dark' && 'border-gray-500',
          'border border-black rounded-full p-2'
        )}
        className={classNames(
          theme.theme === 'dark' && 'text-gray-500 bg-gray-900 border-gray-500',
          'flex gap-3 justify-center p-10 w-full '
        )}
        nextLabel="next >"
        pageRangeDisplayed={4}
        pageCount={8}
        onPageChange={handleCurrentPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
      <Flyout />
    </ErrorBoundary>
  );
};
