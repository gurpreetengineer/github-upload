import React, { Component } from "react";

export class Result extends Component {
  render() {
    return (
      <div>
        <h1> Your Result is</h1>
        <br />
        <h3> Right Answers: {this.props.rightAnswers}</h3>
        <h3> Wrong Answers: {this.props.wrongAnswers}</h3>
      </div>
    );
  }
}

export default Result;
