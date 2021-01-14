import React, { Component } from "react";

export class RadioButtons extends Component {
  arr = [
    {
      que: "Fastest Animal",
      ans: ["Cheetah", "Human", "Penguin", "Lion"],
      correct: "Cheetah",
      questionId: "123",
    },
    {
      que: "Largest Country",
      ans: ["India", "China", "Russia", "USA"],
      correct: "Russia",
    },
  ];
  counter = 0;

  constructor(props) {
    super(props);
    this.state = {
      currentQue: this.arr[this.counter].que,
      currentAns: "",
    };
    console.log("constructor: " + this.state.currentQue);

    console.log("inside Constructor this.counter: " + this.counter);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.counter = this.counter == 1 ? 0 : this.counter + 1;
    console.log("********* this.counter: " + this.counter);
    this.setState({ currentQue: this.arr[this.counter].que });
  };

  // console.log("Outside everything this.counter" + this.counter)

  render() {
    return (
      <div>
        <h3> {this.state.currentQue}</h3>
        <form id="form1">
          {/* onSubmit={(e) => this.handleClick(e)} */}
          {/* <label>{this.arr.map()}</label> */}
          {/* <input type="button" onClick={this.handleClick} value="Submit" /> */}
        </form>
        <button
          type="submit"
          form="form1"
          value="Submit"
          onClick={(event) => this.handleClick(event)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default RadioButtons;
