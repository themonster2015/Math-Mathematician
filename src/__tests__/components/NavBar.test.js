import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import App from '../../App';

test('go to quote page from homepage when clicking on Quote link in Nav bar', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const quote = screen.getByText('Quote');
  fireEvent.click(quote);
  expect(screen.getByTestId('quote')).toHaveTextContent(/We will always have STEM with us/);
});

test('returns home page when home link is clicked', async () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  const link = getByText('Home');
  fireEvent.click(link);
  expect(screen.getByTestId('home')).toHaveTextContent(/Welcome to our Page/);
});

it('should render correctly', () => {
  const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
