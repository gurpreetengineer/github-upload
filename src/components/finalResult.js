import React, { Component } from "react";
import Result from "./result";

export class FinalResult extends Component {
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
  allotedTime = 3;

  constructor(props) {
    super(props);
    this.state = {
      currentQue: this.arr[this.counter].que,
      currentAns: this.arr[this.counter].ans,
      totalQuestions: 2,
      setAnswer: "",
      rightAnswers: 0,
      wrongAnswers: 0,
      timer: this.allotedTime,
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    if (this.state.setAnswer === "") {
      alert("Kindly input a value");
      return;
    } else {
      // alert("Your answer is: " + this.state.setAnswer);
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

      this.handleUI();

      document.querySelector(
        'input[name="' + this.state.currentQue + '"]:checked'
      ).checked = false;
    }
  };

  handleUI = () => {
    this.counter =
      this.counter === 1 ? this.state.totalQuestions : this.counter + 1;

    console.log("this.counter: " + this.counter);
    if (this.counter === this.state.totalQuestions) {
      document.getElementById("buttn").disabled = true;
      this.setState({
        timer: "Done",
      });
      return;
    }

    this.setState({
      timer: this.allotedTime,
      currentQue: this.arr[this.counter].que,
      currentAns: this.arr[this.counter].ans,
      setAnswer: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      setAnswer: event.target.value,
    });
  };

  timer = () => {
    if (this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 1,
      });
    }
    if (this.state.timer < 1 && this.counter < 1) {
      this.handleUI();
    } else if (this.state.timer < 1 && this.counter === 1) {
      this.setState({ timer: "Time's up!" });
      document.getElementById("buttn").disabled = true;
      clearInterval(this.intervalId);
    }
  };

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.timer}</p>
        </div>

        <h3>
          Ques: {this.counter + 1} {this.state.currentQue}
        </h3>
        <form id="form1">
          {this.state.currentAns.map((option, index) => (
            <label htmlFor={this.state.currentQue} key={index}>
              <input
                type="radio"
                onChange={(event) => this.handleChange(event)}
                value={option}
                name={this.state.currentQue}
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
      </div>
    );
  }
}

export default FinalResult;
