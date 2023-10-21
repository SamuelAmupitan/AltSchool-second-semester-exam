import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function useCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => --prev);
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, increment, decrement, reset, setValue };
}

const Counters = () => {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState('');

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount('');
  }

  return (
    <div className="App">
      <h1>The Counter App</h1>
      <h2 className="counter-value">Count : {count}</h2>
      <button onClick={increment} className ="increment-btn">increment</button>
      <button onClick={decrement} className="decrement-btn" >decrement</button>
      <button onClick={reset} className="reset" >reset</button>
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick} className="set-count" >Set count value</button>
      <Link to="/">
        {' '}
        <p>Back to Hompage</p>{' '}
      </Link>
    </div>
  );
};

export default Counters;
