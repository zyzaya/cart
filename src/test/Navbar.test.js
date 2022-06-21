import Navbar from '../components/Navbar';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

it('has a link to cart', () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );
  const cart = screen.getByText('Cart');
  expect(screen.getByText('Cart')).toBeInTheDocument();
  userEvent.click(cart);
  expect(history.location.pathname).toBe('/cart');
});

it('has a link to home', () => {
  const history = createMemoryHistory();
  history.push('/cart');
  console.log(history.location);
  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );
  const home = screen.getByText('Home');
  expect(screen.getByText('Home')).toBeInTheDocument();
  userEvent.click(home);
  expect(history.location.pathname).toBe('/');
});
