import { useState } from "react";
import "./Calculator.scss";

export default function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(userInput).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setUserInput("");
      setResult("");
    } else {
      setUserInput(userInput + value);
    }
  };

  return (
    <div className="calculator-box">
      <input
        className="input input-box"
        type="text"
        value={userInput}
        placeholder="0"
        readOnly
      />

      <button className="c-button" onClick={() => handleClick("C")}>
        C
      </button>
      <button className="negative-button" onClick={() => handleClick("+/-")}>
        +/-
      </button>
      <button className="percentage-button" onClick={() => handleClick("/10")}>
        %
      </button>
      <button className="divide-button" onClick={() => handleClick("/")}>
        ÷
      </button>

      <button className="seven-button" onClick={() => handleClick("7")}>
        7
      </button>
      <button className="eight-button" onClick={() => handleClick("8")}>
        8
      </button>
      <button className="nine-button" onClick={() => handleClick("9")}>
        9
      </button>
      <button className="multiply-button" onClick={() => handleClick("*")}>
        X
      </button>

      <button className="four-button" onClick={() => handleClick("4")}>
        4
      </button>
      <button className="five-button" onClick={() => handleClick("5")}>
        5
      </button>
      <button className="six-button" onClick={() => handleClick("6")}>
        6
      </button>
      <button className="plus-button" onClick={() => handleClick("+")}>
        +
      </button>

      <button className="one-button" onClick={() => handleClick("1")}>
        1
      </button>
      <button className="two-button" onClick={() => handleClick("2")}>
        2
      </button>
      <button className="three-button" onClick={() => handleClick("3")}>
        3
      </button>
      <button className="minus-button" onClick={() => handleClick("-")}>
        -
      </button>

      <button className="zero-button" onClick={() => handleClick("0")}>
        0
      </button>
      <button className="decimal-button" onClick={() => handleClick(".")}>
        .
      </button>
      <button className="equal-button" onClick={() => handleClick("=")}>
        =
      </button>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}
