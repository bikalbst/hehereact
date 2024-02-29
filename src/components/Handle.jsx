import { useState } from "react";

export default function Handle() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + incrementedVariable);
  }
  function decrement() {
    setCount(count - incrementedVariable);
  }

  const [incrementedVariable, setIncrementedVariable] = useState(1);
  function setIncrement() {
    setIncrementedVariable(incrementedVariable + 1);
  }
  function setDecrement() {
    setIncrementedVariable(incrementedVariable - 1);
  }

  return (
    <div>
      <h1>Click Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing it by {incrementedVariable}</h1>
      <button onClick={setIncrement}>Increment Variable</button>
      <button onClick={setDecrement}>Decrement Variable</button>
    </div>
  );
}
