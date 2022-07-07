import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configStore';
import Leagues from '../Leagues';

describe('Leagues test', () => {
  it('renders leagues', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Leagues />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
