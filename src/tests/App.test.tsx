import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';
import { Flyout } from '../app/components/Flyout';
import { MainLayout } from '../app/components/MainLayout';
import App from '../app/components/App';
import ProductPage from '../app/page/[slug]/page';
import DetailsPage from '../app/page/[slug]/details/[title]/page';

test('should render button', () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  render(
    <Provider store={store}>
      <Flyout />
    </Provider>
  );
  expect(screen.getByRole('button')).toHaveTextContent('Unselect All');
});

test('should render ThemeContext', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    console.log(obj);
    return '';
  };
  render(
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
  const button = await screen.findByRole('button', { name: 'Set dark' });
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});

test('should contain correct url', async () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(document.location.pathname).toEqual('/');
});

test('should render button', () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  render(
    <Provider store={store}>
      <ProductPage
        params={{
          slug: '',
        }}
      />
    </Provider>
  );
  expect(screen.getByRole('button', { name: 'error-btn' })).toHaveTextContent(
    'Throw an error'
  );
});

test('should render button', () => {
  window.URL.createObjectURL = function (obj: Blob | MediaSource) {
    obj;
    return '';
  };
  render(
    <Provider store={store}>
      <DetailsPage
        params={{
          title: '',
        }}
      />
    </Provider>
  );
  expect(screen.getByRole('button', { name: 'x' })).toBeInTheDocument();
});
