import React, { useState } from 'react';

function CounterH() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const handleStepChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <input type="number" value={step} onChange={handleStepChange} />
    </div>
  );
}

export default CounterH;
