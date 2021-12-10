import React from 'react';
import { shallow, render } from 'enzyme';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

import Home from './Home';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore({});

describe('<Home />',()=>{
  it('calls increment and decrement on buttons', () => {
    const component = shallow(
      <Home
      />
    );
    console.log(component.debug());
    // expect(component.state().showAHCWelcome).toBe(true);
  });

});