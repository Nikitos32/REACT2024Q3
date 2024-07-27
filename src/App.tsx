import { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Search } from './components/Search';
import { ItemList } from './components/ItemList';
import { IoIosWarning } from 'react-icons/io';
import ReactPaginate from 'react-paginate';

export interface SelectedItem {
  selected: number;
}

export const App = () => {
  const [starWarsPeople, setStarWarsPeople] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePeople = (people: string) => {
    setStarWarsPeople(people);
  };

  const handleCurrentPage = (selectedItem: SelectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <ErrorBoundary
      fallback={
        <p className="text-red-500 flex justify-center items-center h-full gap-5 font-semibold text-2xl flex-col">
          Something went wrong! <IoIosWarning size={100} />
        </p>
      }
    >
      <Search
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage + 1}
        handlePeople={handlePeople}
      />
      <ItemList
        results={starWarsPeople ? JSON.parse(starWarsPeople).results : ''}
      />
      <ReactPaginate
        previousClassName="select-none"
        nextClassName="select-none"
        activeLinkClassName="border border-black rounded-full p-2"
        className="flex gap-3 self-center p-10"
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={9}
        onPageChange={handleCurrentPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </ErrorBoundary>
  );
};
