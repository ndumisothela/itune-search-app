jest.mock('axios'); // Example if you need to mock Axios
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Use .default if you're exporting as default

test('renders correctly and matches snapshot', () => {
  const tree = renderer
    .create(
      <Router>
        <App />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


