import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="accordion">
      <Accordion facts={faqs} />
    </div>
  );
}
function Accordion({ facts }) {
  const [reveal, setReveal] = useState(null);

  const listItems = facts.map((d, index) => (
    <div key={index} className="item">
      <div className="content-box">
        <p>
          {`${index + 1}. ${d.title}`}
          <button onClick={() => answer(index)}>ANS</button>
        </p>
        {reveal === index && <p>{d.text}</p>}
      </div>
    </div>
  ));

  function answer(index) {
    reveal === index ?setReveal(null): setReveal(index);
  }
  return <>{listItems}</>;
}

export default App;
