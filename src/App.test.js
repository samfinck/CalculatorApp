import { render, fireEvent } from '@testing-library/react';
import App from './App';

// test addition
test('check that 2 + 3 === 5', () => {
  const component = render(<App />);
  fireEvent.click(component.getByTitle('2'));
  fireEvent.click(component.getByText('+'));
  fireEvent.click(component.getByTitle('3'));
  fireEvent.click(component.getByText('='));
  expect(component.getByTitle('answer').textContent).toBe('5');
});

// test division
test('check that 9 / 3 === 3', () => {
  const component = render(<App />);
  fireEvent.click(component.getByTitle('9'));
  fireEvent.click(component.getByText('÷'));
  fireEvent.click(component.getByTitle('3'));
  fireEvent.click(component.getByText('='));
  expect(component.getByTitle('answer').textContent).toBe('3');
});

test('should show 2222', () => {
  const component = render(<App />);
  fireEvent.click(component.getByTitle('2'));
  fireEvent.click(component.getByTitle('2'));
  fireEvent.click(component.getByTitle('2'));
  fireEvent.click(component.getByTitle('2'));
  expect(component.getByTitle('answer').textContent).toBe('2222');
});

test('should stay 0', () => {
  const component = render(<App />);
  fireEvent.click(component.getByTitle('0'));
  fireEvent.click(component.getByTitle('0'));
  fireEvent.click(component.getByTitle('0'));
  expect(component.getByTitle('answer').textContent).toBe('0');
});
