// use state is a hook that allows us to use state in a functional component
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);

  return (
    <>
      <p>Here is the current count: {count}</p>;
      <button type="button">Update count</button>;
      <button
        type="button"
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          // prevent situations involving stale datat use the functional form of set state
          // Bring in the previous state as a parameter
          // Return the new state
          setCount((prevenCount) => prevenCount + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}
