import { useState } from "react";
import IncreaseButton from "./increaseButton";
import DecreaseButton from "./decreaseButton";
import CounterDisplay from "./counterDisplay";

function NumberApp() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((pre) => pre + 1);
  }
  function decrease() {
    setCount((pre) => pre - 1);
  }

  return (
    <>
      <div>
        <CounterDisplay count={count} />
        <IncreaseButton IncreaseButton={increase}></IncreaseButton>
        <DecreaseButton DecreaseButton={decrease} disable={count === 0}></DecreaseButton>
      </div>
    </>
  );
}

export default NumberApp;
