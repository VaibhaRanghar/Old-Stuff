import { useEffect, useState } from "react";
import "./AppTC.css";

function AppTC() {
  const [bill, setBill] = useState("");
  const [percent1, setPercent1] = useState(null);
  const [percent2, setPercent2] = useState(null);

  function handleBill(value) {
    value = Number(value);
    setBill(() => (value > 0 ? value : null));
  }
  let tip = percent1+percent2;
  function reset(){
    setBill("");
    setPercent1(null);
    setPercent2(null);
  }
  return (
    <>
      <Bill handleBill={handleBill} bill={bill}/>
      <Service bill = {bill} newPercent = {setPercent1}>How did you like the service?{" "}</Service>
      <Service bill = {bill} newPercent = {setPercent2}>How did your friend like the service?{" "}</Service>
      {bill>0 && <Footer bill={bill} tip = {tip} reset = {reset}/>}
    </>
  );
}

function Bill({ handleBill, bill }) {
  return (
    <p className="statements">
      How much was the bill?{" "}
      <input type="textfield" onChange={(e) => handleBill(e.target.value)} value={bill} />
    </p>
  );
}

function Service({ children,bill, newPercent }) {
  return (
    <p className="statements">
      {children}
      <select onChange={(e) => newPercent(() => bill*e.target.value/100)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </p>
  );
}
function Footer({ bill, tip, reset}) {
  return (
    <>
        <p className="statements">You pay ${bill+tip} (${bill}+${tip}) </p>
        <button className="statements" onClick={reset}>Reset</button>
    </>
  );
}
export default AppTC;
