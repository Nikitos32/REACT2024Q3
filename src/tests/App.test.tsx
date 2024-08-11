import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Flyout } from '@/app/components/Flyout';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { MainLayout } from '@/app/components/MainLayout';
import App from '@/App';

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
  expect(button).toBeVisible();
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
