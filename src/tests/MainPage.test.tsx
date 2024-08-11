/* import { Item } from '@/app/components/Item';
import { ItemList } from '@/app/components/ItemList';
import { Search } from '@/app/components/Search';
import { MainPage } from '@/app/pages/MainPage';
import { store } from '@/app/store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

test('renders a Search component', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>
  );

  expect(
    <Search
      currentPage={1}
      handleCurrentPage={() => {}}
      item={''}
      handlePeople={() => {}}
      handleItem={() => {}}
    />
  ).toBeDefined();
});

test('renders a ItemList component', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  const mockObj1 = {
    birth_year: 'test',
    created: 'test1',
    eye_color: 'test',
    height: 'test',
    mass: 'test',
    name: 'test',
    films: ['test', 'test'],
    gender: 'test',
    skin_color: 'test',
  };
  const mockObj2 = {
    birth_year: 'test',
    created: 'test2',
    eye_color: 'test',
    height: 'test',
    mass: 'test',
    name: 'test',
    films: ['test', 'test'],
    gender: 'test',
    skin_color: 'test',
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ItemList results={[mockObj1, mockObj2]} />
      </BrowserRouter>
    </Provider>
  );

  expect(
    <Item birthYear="test" height="test" mass="test" name="test" />
  ).toBeDefined();
});
 */
