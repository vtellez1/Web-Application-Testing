import React from 'react';
import { render } from '@testing-library/react';
import App, {addStrike} from './App';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './components/Dashboard'
import Display from './components/Display'


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});

test('renders dashboard component', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/foul/i)
  expect(element).toBeInTheDocument()
})

test('renders dashboard component', () => {
  const wrapper = rtl.render(<Display/>)
  const element = wrapper.getByText(/balls/i)
  expect(element).toBeInTheDocument()
})


