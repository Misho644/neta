import { useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="component-card">
      <h2>Усъвършенстван брояч</h2>
      <p className="count-display">Брояч: {count}</p>
      <div className="button-group">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
        <button onClick={() => setCount((prevCount) => prevCount + 5)}>+5</button>
        <button onClick={() => setCount((prevCount) => prevCount - 5)}>-5</button>
        <button onClick={() => setCount(0)} className="reset-btn">Нулиране</button>
      </div>
    </div>
  );
};

export default AdvancedCounter;
