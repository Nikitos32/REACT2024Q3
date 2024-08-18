import ErrorPage from '../../app/not-found';
import { render, screen } from '@testing-library/react';

test('renders a message', () => {
  render(<ErrorPage />);
  expect(screen.getByText('404 PAGE NOT FOUND')).toBeDefined();
});
