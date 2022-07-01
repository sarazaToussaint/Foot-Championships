import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configStore';
import Home from '../Home';

describe('Home test', () => {
  it('renders leagues', () => {
    const app = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
