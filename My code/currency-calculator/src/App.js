import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [base, setbase] = useState("USD");
  const [currency, setCurrency] = useState("USD");
  const [ans, setAns] = useState();

  useEffect(() => {
    const fetchAPITest = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${base}&to=${currency}`
        );
        const status = await res.json();
        console.log(res);
        console.log(status);
        setAns(status.rates[currency]);
      } catch (error) {
        console.log("Errorr = " + error.message);
      }
    };
    fetchAPITest();
  }, [amount, base, currency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={base} onChange={(e) => setbase(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {ans || "Loading..."}</p> 
    </div>
  );
}

function APITestor({ setAns, ans }) {
  useEffect(() => {
    const fetchAPITest = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
        );
        const status = res.json();
        setTimeout(() => {
          console.log(res);
          console.log(status);
          setAns(() => status.rates);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPITest();
  }, [setAns, ans]);
}
