import React, { Component } from "react";

class BackendTimer extends Component {
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
      questionId: "124",
    },
  ];

  counter = 0;

  constructor(props) {
    super(props);
    this.state = {
      currentQue: this.arr[this.counter].que,
      currentAns: "",
      currentCount: 3,
    };
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1 && this.counter < 1) {
      this.counter = this.counter == 1 ? 0 : this.counter + 1;
      this.setState({
        currentCount: 3,
        currentQue: this.arr[this.counter].que,
      });
    } else if (this.state.currentCount < 1 && this.counter === 1) {
      this.setState({ currentCount: "Time's up!" });
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
        <p>{this.state.currentCount}</p>
        <h3>{this.state.currentQue}</h3>
      </div>
    );
  }
}

export default BackendTimer;
