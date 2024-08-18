import { MyModal } from '../../app/components/MyModal';
import { store } from '../../app/store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

test('renders a message', () => {
  render(
    <Provider store={store}>
      <MyModal params={{ title: '1' }} />
    </Provider>
  );
  expect(screen.findByRole('button', { name: 'x' })).toBeDefined();
});
