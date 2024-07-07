import { useState } from "react";
import "./App.css";

const sampleText =
  "Computers can do lots of jobs. They can do maths, store information, or play music. You can use a computer to write or to play games. What do you know about the history of computers?The first computers were very big. They were the size of a room! They were so big that people didn't have them at home. Early computers could also only do simple maths, like a calculator. In the 1930s Alan Turing had the idea for a computer you could program to do different things.In 1958 Jack Kilby invented the microchip. Microchips are tiny but can store lots of information. They helped make computers smaller. In the 1970s computers were smaller and cheaper so people started to use them at home. In the 1980s computer games were very popular. Lots of people bought computers just to play games.";
function TextExtender() {
  return (
    <div>
      <ShowText text={sampleText} range={200} />
    </div>
  );
}

function ShowText({ text, range = 10 }) {
  const [show, setShow] = useState(false);

  let halfText = text.slice(0, range + 1);

  return (
    <>
      <p className="text">
        {show ? text : halfText + "..."}
        <span className="show-text" onClick={() => setShow(() => !show)}>
          {" "}
          {show ? "Show less" : "Show more"}
        </span>
      </p>
    </>
  );
}

export default TextExtender;
