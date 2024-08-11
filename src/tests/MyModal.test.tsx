import { MyModal } from '@/app/components/MyModal';
import { store } from '@/app/store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

test('renders a message', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <MyModal />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.findByRole('button', { name: 'x' })).toBeDefined();
});
