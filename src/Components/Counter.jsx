import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const AddOne = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={AddOne}>Add 1</button>
      <p>The counter value is {count} </p>
    </div>
  );
};

export default Counter;