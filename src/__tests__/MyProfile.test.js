import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

describe('MyProfile component testing using snapshots', () => {
  it('Test MyProfile component renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
