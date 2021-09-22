import React from 'react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import CalculatorPage from '../../pages/CalculatorPage';

/* test('do calculations', async () => {
  render(<CalculatorPage />);
  // console.log(screen.getByTestId('9'));
  // fireEvent.click(screen.getByTestId('9'));
  const one = screen.getByText('1');
  const two = screen.getByText('2');
  const plus = screen.getByText('+');
  const equal = screen.getByText('=');

  fireEvent.click(one);
  fireEvent.click(plus);
  fireEvent.click(two);
  fireEvent.click(equal);
  const result = await screen.getByRole('result');
  expect(result).toHaveTextContent('3');

  // await waitFor(() => screen.getByRole('result'));
  // expect(screen.getByTestId('result')).toHaveTextContent('7');
}); */

test('loads and displays greeting', async () => {
  render(<CalculatorPage />);

  expect(screen.getByText("Let's do some math!")).toBeInTheDocument();
});
