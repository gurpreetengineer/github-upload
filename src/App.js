import React from "react"; //, { useState }
import "./App.css";
import BackendTimer from "./components/BackendTimer";
import RadioButtons from "./components/RadioButtons";
// import Timer from "./components/timer";
import FetchingValues from "./components/fetchingValues";
import FinalResult from "./components/finalResult";

function App() {
  // const _questions = [
  //   {
  //     que: "Fastest Animal",
  //     ans: [
  //       { text: "Cheetah", value: 1 },
  //       { text: "Human", value: 0 },
  //       { text: "Penguin", value: 0 },
  //       { text: "Lion", value: 0 },
  //     ],
  //   },
  //   {
  //     que: "Largest Country",
  //     ans: [
  //       { text: "India", value: 0 },
  //       { text: "China", value: 0 },
  //       { text: "Russia", value: 1 },
  //       { text: "USA", value: 0 },
  //     ],
  //   },
  // ];
  // console.log(_questions);
  // console.log(_questions.text);

  // const [buttonName, setButtonName] = useState("Save");
  // const [innerValue, setInnerValue] = useState(0);

  return (
    <>
      <div>
        {/* <Timer /> */}
        {/* <RadioButtons /> */}
        {/* <BackendTimer /> */}
        <FinalResult />
        {/* <FetchingValues /> */}
      </div>
    </>
  );
}

export default App;
