import { useState } from "react";
import IncreaseButton from "./increaseButton";
import DecreaseButton from "./decreaseButton";

function NumberApp() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <IncreaseButton IncreaseButton={increase}></IncreaseButton>
        <DecreaseButton DecreaseButton={decrease}></DecreaseButton>
      </div>
    </>
  );
}

export default NumberApp;
