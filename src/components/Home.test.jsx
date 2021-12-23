import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('<Home />',()=>{
  it('calls increment and decrement on buttons', () => {
    const dispatch = jest.fn()
    const component = mount(
      <Home count={0} dispatch={dispatch} />
    );
    component.instance();
    const counterValue = component.find('span').text();
    expect(counterValue).toEqual('0');
    component.find('button').first().simulate('click');
    expect(dispatch).toHaveBeenCalled();
    component.find('button').first().simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});