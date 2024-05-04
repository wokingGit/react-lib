import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 3);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
