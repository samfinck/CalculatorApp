import { render, screen, fireEvent } from '@testing-library/react';
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
