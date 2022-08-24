import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../components/App';

it('adds an item to an empty cart', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  const button = screen.getAllByText('Add to Cart')[0];

  userEvent.click(button);
});
