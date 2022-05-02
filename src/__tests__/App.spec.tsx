import { render } from '@testing-library/react';
import App from '../App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/App component works!/i);
  expect(linkElement).toBeInTheDocument();
});
