import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import CalculatorPage from '../../pages/CalculatorPage';

test('loads and displays greeting', async () => {
  render(<CalculatorPage />);
  expect(screen.getByText("Let's do some math!")).toBeInTheDocument();
});
