import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  let [steps, setSteps] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  function prev() {
    console.log(steps);
    if (steps > 1) {
      setSteps(steps - 1);
    }
  }
  function next() {
    console.log(steps);
    if (steps < 3) {
      setSteps(steps + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">Step {steps}: {messages[steps - 1]}</p>
          <div className="buttons">
            <button style={{ backgroundColor: "purple", color: "white" }}onClick={prev}>Previous</button>
            <button style={{ backgroundColor: "purple", color: "white" }}onClick={next}>Next</button>
          </div>
        </div>
      )  
    }
    </>
  );
}
