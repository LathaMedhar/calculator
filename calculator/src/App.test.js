import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('addition functionality', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const button1 = screen.getByText('1');
  const button2 = screen.getByText('2');
  const buttonPlus = screen.getByText('+');
  const buttonEquals = screen.getByText('=');
  const result = screen.getByText(/result:/i);

  fireEvent.click(button1);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);

  expect(result).toHaveTextContent('Result: 3');
});

test('subtraction functionality', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const button5 = screen.getByText('5');
  const button3 = screen.getByText('3');
  const buttonMinus = screen.getByText('-');
  const buttonEquals = screen.getByText('=');
  const result = screen.getByText(/result:/i);

  fireEvent.click(button5);
  fireEvent.click(buttonMinus);
  fireEvent.click(button3);
  fireEvent.click(buttonEquals);

  expect(result).toHaveTextContent('Result: 2');
});

test('multiplication functionality', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const button5 = screen.getByText('5');
  const button3 = screen.getByText('3');
  const buttonMultiply = screen.getByText('*');
  const buttonEquals = screen.getByText('=');
  const result = screen.getByText(/result:/i);

  fireEvent.click(button5);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button3);
  fireEvent.click(buttonEquals);

  expect(result).toHaveTextContent('Result: 15');
});