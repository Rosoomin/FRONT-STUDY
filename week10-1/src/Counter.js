import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>카운터 앱</h1>
      <p>현재 숫자: {count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>+1</button>
      <button className="button" onClick={() => setCount(count - 1)}>-1</button>
      <button className="button reset" onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counter;
