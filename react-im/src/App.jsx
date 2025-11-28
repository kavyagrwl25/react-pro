import { useState } from "react";

import "./App.css";

function App() {
  const [Count, setCount] = useState(0);
  const addValue = () => {
    if (Count >= 20) {
      alert("Abe bas kar bhai");
    } else {
      setCount(Count + 1);
    }
  };
  const removeValue = () => {
    if (Count <= 0) {
      alert("Isse niche nahi gir sakta");
    } else {
      setCount(Count - 1);
    }
  };

  return (
    <>
      <button onClick={addValue}>Click to increment by 1</button>
      <button onClick={removeValue}>Click to decrement by 1</button>
      <p>Counter: {Count}</p>
    </>
  );
}

export default App;
