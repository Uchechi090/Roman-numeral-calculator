import React, { Component } from "react";
import { RomanToInt, convertToRoman, Compute } from "../components/Conversions";

class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScreen: "",
      prevValue: "",
      currOp: "",
      calValue: "",
      isNum: false,
      isOperand: false
    };
  }

  componentDidMount() {
    this.addEvents();
  }

  addEvents = () => {
    let buttons = document.getElementsByClassName("button");
    Array.prototype.forEach.call(buttons, button => {
      button.addEventListener("click", () => button);
    });
    return buttons;
  };

  assignStateValues = (input, displayValue) => {
    let newValue = "";
    let newInput = "";
    const {
      currOp,
      prevValue,
      prevScreen,
      calValue
    } = this.state;

    
    if (prevScreen === "") {
      newInput = RomanToInt(displayValue);
    } else {
      newInput = RomanToInt(displayValue.substring(prevScreen.length));
    }
    if (prevValue !== "" && calValue === "") {
      newValue = Compute(prevValue, currOp, newInput);
    } else if (calValue !== "") {
      newValue = Compute(calValue, currOp, newInput);
    }
    this.setState({
      prevValue: newInput,
      currOp: input,
      calValue: newValue,
      prevScreen: displayValue + input
    });
  };

  Clear = () => {
    this.setState({
      isNum: false,
      isOperand: false,
      prevScreen: "",
      prevValue: "",
      currOp: "",
      prevOp: "",
      calValue: ""
    });
    return "";
  };

  Equals = displayValue => {
    const {
      calValue,
      currOp,
      currValue,
      prevValue,
      prevScreen
    } = this.state;
    let result = "";
    let newInput = RomanToInt(displayValue.substring(prevScreen.length));
    if (calValue !== "") {
      result = Compute(calValue, currOp, newInput);
    } else if (prevValue !== "") {
      result = Compute(prevValue, currOp, newInput);
    } else if (currValue !== "") {
      return result;
    }

    return convertToRoman(result);
  };

  validateInput = input => {
    const operators = ["+", "-", "*"];
    if (
      operators.includes(input) &&
      !this.state.isNum &&
      !this.state.isOperand
    ) {
      return false;
    }
    if (
      operators.includes(input) &&
      !this.state.isNum &&
      this.state.isOperand
    ) {
      let val = document.getElementById("screen").value;
      val = val.substr(0, val.length - 1) + input;
      document.getElementById("screen").value = val;
      this.setState({ currOp: input });
      return false;
    }
    if (operators.includes(input)) {
      this.setState({ isNum: false, isOperand: true });
      return true;
    }

    if (!operators.includes(input)) {
      if (input === "=" && this.state.isOperand) {
        return false;
      }
      this.setState({ isNum: true, isOperand: false });
      return true;
    }
  };

  handleButtons = e => {
    e.preventDefault();

    let display = document.getElementById("screen");
    let resultScreen = document.getElementById("result");
    const text = e.target.innerText;

    if (this.validateInput(text)) {
      if (text === "Clear") {
        display.value = this.Clear();
        resultScreen.value = this.Clear();
      } else if (text === "=") {
        resultScreen.value = this.Equals(display.value);
      } else if (text === "+") {
        this.assignStateValues(text, display.value);
        display.value += "+";
      } else if (text === "-") {
        this.assignStateValues(text, display.value);
        display.value += "-";
      } else if (text === "*") {
        this.assignStateValues(text, display.value);
        display.value += "*";
      } else {
        display.value += text;
      }
    }
  };

  render() {
    return (
      <div className="calculator" onClick={e => this.handleButtons(e)}>
        <div>
          <input type="text" id="screen" maxLength="20" />
          <input type="text" id="result" maxLength="20" />
        </div>
        <div className="calc-buttons">
          <div className="functions-one">
            <button className="button triggers">Clear</button>
            <button className="button basic-stuff">*</button>
            <button className="button basic-stuff">-</button>
            <button className="button numbers">VII</button>
            <button className="button numbers">VIII</button>
            <button className="button numbers">IX</button>
            <button className="button numbers">IV</button>
            <button className="button numbers">V</button>
            <button className="button numbers">VI</button>
            <button className="button numbers">I</button>
            <button className="button numbers">II</button>
            <button className="button numbers">III</button>
            <button className="button numbers">X</button>
            <button className="button numbers">L</button>
            <button className="button numbers">C</button>
            <button className="button numbers">D</button>
            <button className="button numbers">M</button>
            <button className="button basic-stuff">+</button>
            <button className="button basic-stuff">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;
