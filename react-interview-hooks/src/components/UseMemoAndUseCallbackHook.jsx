import React, { useMemo, useState } from "react";

export default function UseMemoAndUseCallbackHook() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = useMemo(() => {
    console.log("Calculating Squared Value");
    return counter * counter;
  }, [counter]);
  return (
    <div>
      <h1>Squared Counter: {squaredValue}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <h2>Counter 2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>
        Decrement
      </button>
    </div>
  );
}
