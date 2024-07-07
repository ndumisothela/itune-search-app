jest.mock('axios'); // Mock Axios
import axios from 'axios';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Use .default if you're exporting as default

test('renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Router>
      <App />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('axios function works correctly', async () => {
  // Define mock data
  const mockData = {
    results: [
      { trackId: 1, trackName: 'Track 1', collectionName: 'Collection 1' },
      { trackId: 2, trackName: 'Track 2', collectionName: 'Collection 2' },
    ],
  };

  // Mock axios.get to return mock data
  axios.get.mockResolvedValue({ data: mockData });

  const term = 'test';
  const media = 'music';

  // Make the axios call
  const response = await axios.get(`http://localhost:5000/api/search?term=${term}&media=${media}`);
  const data = response.data;

  // Assertions
  expect(data).toBeDefined();
  expect(data.results).toHaveLength(2);
  expect(data.results[0].trackName).toBe('Track 1');
  console.log(data);
});
