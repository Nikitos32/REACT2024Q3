import ErrorBoundary from '../app/components/ErrorBoundary';
import { Search } from '../app/components/Search';
import { store } from '../app/store/store';
import { fireEvent, render, screen } from '@testing-library/react';
import ReactPaginate from 'react-paginate';
import { Provider } from 'react-redux';

test('renders a message', async () => {
  render(
    <Provider store={store}>
      <ErrorBoundary
        fallback={
          <p role="paragraph" aria-label="p-1">
            Something went wrong!
          </p>
        }
      >
        <ReactPaginate
          pageRangeDisplayed={4}
          pageCount={8}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        ></ReactPaginate>
      </ErrorBoundary>
    </Provider>
  );

  const nextButton = await screen.findByRole('button', { name: 'Page 2' });
  fireEvent.click(nextButton);
  expect(nextButton).toBeDefined();
});

test('renders a message', () => {
  render(
    <Provider store={store}>
      <ErrorBoundary
        fallback={
          <p role="paragraph" aria-label="p-1">
            Something went wrong!
          </p>
        }
      >
        <Search
          currentPage={1}
          handleCurrentPage={() => {}}
          handleItem={() => {}}
          handlePeople={() => {}}
          item=""
        />
      </ErrorBoundary>
    </Provider>
  );

  const paragraph = screen.getByRole('paragraph');
  expect(paragraph).toBeInTheDocument();
});
