import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Home from './components/Home';
import About from './components/About';

const App = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home count={count} dispatch={dispatch} />}/>
          <Route path="/about" element={<About name="Douglas" />}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;