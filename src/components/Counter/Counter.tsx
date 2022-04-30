import { useState } from 'react';
import ICounterProps from '../../interfaces/ICounter';

import styles from './Counter.module.scss';

const Counter = ({ initialValue = 0 }: ICounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.counter_container}>
        <button onClick={handleIncrease} type="button">
          Increase counter
        </button>
        <p>Counter: {counter}</p>
      </div>
    </div>
  );
};

export default Counter;
