import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

describe('Rockets component testing using snapshots', () => {
  it('Test Rockets component renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
