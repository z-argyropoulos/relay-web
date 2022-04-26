import { useState } from 'react';
import ICounterProps from '../../interfaces/ICounter';

import './Counter.scss';

const Counter = ({ initialValue = 0 }: ICounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="counter">
      <div className="counter_container">
        <button onClick={handleIncrease}>Increase counter</button>
        <p>Counter: {counter}</p>
      </div>
    </div>
  );
};

export default Counter;
