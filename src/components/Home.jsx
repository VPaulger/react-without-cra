import React from 'react'
import { decrement, increment } from '../counterSlice';
import '../styles/home.scss';

const Home = ({ count, dispatch }) => {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
};

export default Home;