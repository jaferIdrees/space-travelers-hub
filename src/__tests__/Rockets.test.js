import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';
import { retrieveRockets } from '../redux/rockets/rockets';

describe('Test rocket reducers and functions', () => {
  it('Fetches data from API', async () => {
    await store.dispatch(retrieveRockets());
    expect(store.getState().rockets).toBeTruthy();
  });
});

describe('Rockets component testing using snapshots', () => {
  it('Test Rockets component renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
