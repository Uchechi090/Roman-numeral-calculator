import React, { Component } from "react";
import {
  Clear,
  Equals,
  Add,
  Subtract,
  Multiply
} from "../components/TriggerFunctions";

class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtons = () => {
    let display = document.getElementById("screen");
    console.log(display.value)
    let buttons = document.getElementsByClassName("button");

    Array.prototype.forEach.call(buttons, button => {
      button.addEventListener("click", () => {
        if (
          button.nodeValue !== "C" &&
          button.nodeValue !== "=" &&
          button.nodeValue !== "+" &&
          button.nodeValue !== "-" &&
          button.nodeValue !== "*"
        ) {
          display.value += button.nodeValue;
        } else if (button.nodeValue === "C") {
          Clear();
        } else if (button.nodeValue === "=") {
          Equals();
        } else if (button.nodeValue === "+") {
          Add();
        } else if (button.nodeValue === "-") {
          Subtract();
        } else if (button.nodeValue !== "*") {
          Multiply();
        }
      });
    });
  };

  render() {
    return (
      <div className="calculator" onLoad={this.handleButtons}>
        <input type="text" id="screen" maxLength="20" />
        <div className="calc-buttons">
          <div className="functions-one">
            <button className="button triggers">C</button>
            <button className="button basic-stuff">+</button>
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
            {/* <button class="button numbers">V</button> */}
            <button className="button basic-stuff">*</button>
            <button className="button basic-stuff">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keys;
