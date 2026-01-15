import { useState } from "react";

const Counter = () => {
  // Декларираме state променлива "count" с начална стойност 0
  const [count, setCount] = useState(0);

  return (
    <div className="component-card">
      <h2>Основен брояч</h2>
      <p>Бутонът е натиснат {count} пъти</p>
      <button onClick={() => setCount(count + 1)}>Натисни ме</button>
    </div>
  );
};

export default Counter;
