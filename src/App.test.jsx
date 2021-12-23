import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<App />',()=>{
  let store;
  beforeEach(() => {
    store = mockStore({
      counter: { value: 0 }
    });
  });
  it('renders correct routes', () => {
    const component = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component.find('a').first().prop('href')).toEqual('/')
    expect(component.find('a').last().prop('href')).toEqual('/about')
  });
});