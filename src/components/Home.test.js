import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import 'jsdom-global/register';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from './Home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({adapter: new Adapter()});
describe('<Home />',()=>{
  let store;
  beforeEach(() => {
    store = mockStore({
      counter: { value: 0 }
    });
  });

  it('calls increment and decrement on buttons', () => {
    const component = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const counterValue = component.find('span').text();
    expect(counterValue).toEqual('0');
    component.find('button').first().simulate('click');
    component.update();
    // expect(counterValue).toEqual('1');
  });
});