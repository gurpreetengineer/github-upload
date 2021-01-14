import React, { Component } from "react";

class Timer extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      currentCount: 3,
      element: null,
      score: 0,
      ans: null,
      setAnswer: "",
      counter: 0,
      mistakes: 0,
      ind: 0,
    };
    console.log(
      "************************this.arr.correct" + this.arr[1].correct
    );
  }

  fetchingArray = (ind) => {
    for (var i = 0; i < this.arr.length; i++) {
      console.log("ind: " + ind);
      console.log(this.arr[ind].correct);

      this.setState({
        element: this.arr[i].que,
        ans: this.arr[i].ans.map((text, index) => (
          <label>
            <input
              type="radio"
              value={text}
              key={index}
              name="answer"
              onChange={
                (e) =>
                  // this.setState({
                  // setAnswer:
                  {
                    console.log(
                      "e.target.value = " +
                        e.target.value +
                        ", this.arr.correct = " +
                        this.arr[0].correct
                    );
                    e.target.value == this.arr[0].correct
                      ? this.setState({ counter: this.state.counter + 1 })
                      : this.setState({ mistakes: this.state.mistakes + 1 });
                  }
                // })
              }
            />
            {text}
            {console.log("ind2: " + ind)}
          </label>
        )),
      });
      var hitted = this.arr.shift();
      console.log("assigned" + this.state.element);
      console.log("quesss" + hitted);
      this.setState({ ind: this.state.ind + 1 });
      break;
    }
  };

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      this.setState({
        currentCount: 3,
      });
      if (this.arr.length == []) {
        clearInterval(this.intervalId);
        alert(
          "this.state.counter= " +
            this.state.counter +
            "\n" +
            "this.state.mistakes= " +
            this.state.mistakes
        );
      }

      this.fetchingArray(this.state.ind);
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
        {this.state.currentCount}
        <h2> {this.state.element}</h2>
        <p> {this.state.ans}</p>
        <p>{this.state.setAnswer}</p>
      </div>
    );
  }
}

export default Timer;
