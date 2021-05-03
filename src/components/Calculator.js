import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

const Calculator = () => {
  const lightTheme = useTheme();

  const [leftNumber, setLeftNumber] = useState("");
  const [rightNumber, setRightNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [answer, setAnswer] = useState("0");

  function getNumbers(num) {
    if (operation === "") {
      if (num === "C")
        setLeftNumber(leftNumber.substr(0, leftNumber.length - 1));
      else setLeftNumber(leftNumber + num);
    } else {
      if (num === "C")
        setRightNumber(rightNumber.substr(0, rightNumber.length - 1));
      else setRightNumber(rightNumber + num);
    }
  }

  function getOperation(operation) {
    setOperation(operation);
  }

  function clearAll() {
    setLeftNumber("");
    setOperation("");
    setRightNumber("");
    setAnswer("0");
  }

  function changeSign() {
    if (operation === "") setLeftNumber(leftNumber * -1);
    else setRightNumber(rightNumber * -1);
  }

  function computePercentage() {
    setRightNumber(rightNumber / 100);
  }

  function computeEquation() {
    if (leftNumber !== "" || rightNumber !== "" || operation !== "") {
      switch (operation) {
        case "+":
          setAnswer(
            `${
              Math.round(
                `${(parseFloat(leftNumber) + parseFloat(rightNumber)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setAnswer(
            `${
              Math.round(
                `${(parseFloat(leftNumber) - parseFloat(rightNumber)) * 100}`
              ) / 100
            }`
          );
          break;
        case "*":
          setAnswer(
            `${
              Math.round(
                `${parseFloat(leftNumber) * parseFloat(rightNumber) * 100}`
              ) / 100
            }`
          );
          break;
        case "/":
          setAnswer(
            `${
              Math.round(
                `${(parseFloat(leftNumber) / parseFloat(rightNumber)) * 100}`
              ) / 100
            }`
          );
          break;

        default:
          setAnswer(leftNumber);
          break;
      }
    }
  }

  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "."].forEach((item) => {
    calcBtns.push(
      <button
        className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
        onClick={(e) => {
          getNumbers(e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  return (
    <div
      className={`calculator-wrapper ${
        lightTheme ? "light-theme" : "dark-theme"
      }`}
    >
      <ToggleThemeButton />
      <div
        className={`screen-container ${
          lightTheme ? "light-theme" : "dark-theme"
        }`}
      >
        <div className="equation">{leftNumber + operation + rightNumber}</div>
        <div className="answer">{answer}</div>
      </div>

      <div className="buttons-container">
        <div className="digits">{calcBtns}</div>
        <div className="modifiers subgrid">
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={() => clearAll()}
          >
            AC
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={() => changeSign()}
          >
            +/-
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={() => computePercentage()}
          >
            %
          </button>
          {/* <button className={`btn ${lightTheme ? 'light-numpad' : 'dark-numpad'}`} onClick={() => setLeftNumber(leftNumber.substr(0, leftNumber.length - 1))}>C</button> */}
        </div>
        <div className="operations subgrid">
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={(e) => getOperation(e.target.value)}
            value="/"
          >
            /
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={(e) => getOperation(e.target.value)}
            value="*"
          >
            *
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={(e) => getOperation(e.target.value)}
            value="+"
          >
            +
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={(e) => getOperation(e.target.value)}
            value="-"
          >
            -
          </button>
          <button
            className={`btn ${lightTheme ? "light-numpad" : "dark-numpad"}`}
            onClick={() => computeEquation()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
