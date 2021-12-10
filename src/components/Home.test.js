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
  it('calls increment and decrement on buttons', () => {
    const store = mockStore({
      counter: { value: 0 }
    });
    const component = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    component.find('button').first().simulate('click');
  });
});