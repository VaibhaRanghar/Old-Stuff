import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  let date = new Date(new Date().toDateString());
  date.setDate(date.getDate() + count);

  return (
    <div className="dayCounter">
      <div>
        <input
          type="range"
          max={10}
          min={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p className="message">
        {`${
          count === 0
            ? "Today is "
            : count > 0
            ? count + " days from today is "
            : Math.abs(count) + " days ago was "
        }` + date.toDateString()}
      </p>
      {count != 0 || step != 1 ? (
        <button
          onClick={() => {
            {
              setCount(0);
              setStep(1);
            }
          }}
        >
          RESET
        </button>
      ) : null}
    </div>
  );
}
