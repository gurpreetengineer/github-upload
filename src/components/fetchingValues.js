import React, { Component } from "react";
import Result from "./result";

export class FetchingValues extends Component {
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
      currentAns: this.arr[this.counter].ans,
      setAnswer: "",
      rightAnswers: 0,
      wrongAnswers: 0,
      currentCount: 3,
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.setAnswer === "") {
      alert("Kindly input a value");
      return;
    } else {
      alert("Your answer is: " + this.state.setAnswer);
      if (
        this.state.setAnswer !== "" &&
        this.state.setAnswer === this.arr[this.counter].correct
      ) {
        this.setState({
          rightAnswers: this.state.rightAnswers + 1,
        });
      } else {
        this.setState({
          wrongAnswers: this.state.wrongAnswers + 1,
        });
      }

      this.counter = this.counter === 1 ? 2 : this.counter + 1;

      if (this.counter === 2) {
        document.getElementById("buttn").disabled = true;
        return;
      }
      this.setState({
        currentQue: this.arr[this.counter].que,
        currentAns: this.arr[this.counter].ans,
        setAnswer: "",
      });
    }

    document.querySelector(
      'input[name="' + (this.state.currentQue + " answer") + '"]:checked'
    ).checked = false;
  };

  handleChange = (event) => {
    this.setState({
      setAnswer: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3> {this.state.currentQue}</h3>
        <form id="form1">
          {this.state.currentAns.map((option, index) => (
            <label htmlFor={this.state.currentQue + " answer"} key={index}>
              <input
                type="radio"
                onChange={(event) => this.handleChange(event)}
                value={option}
                name={this.state.currentQue + " answer"}
              />
              {option}
            </label>
          ))}

          <button
            id="buttn"
            type="submit"
            form="form1"
            value="Submit"
            onClick={(event) => this.handleClick(event)}
          >
            Submit
          </button>
        </form>
        <Result
          rightAnswers={this.state.rightAnswers}
          wrongAnswers={this.state.wrongAnswers}
        />
        <Result />
      </div>
    );
  }
}

export default FetchingValues;
