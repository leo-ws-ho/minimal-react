import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Clock(props) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentTime(new Date());
  //     console.log(new Date());
  //   }, 1000);
  // }, [currentTime]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentTime(new Date());
      console.log(new Date());
    }, 1000);

    return function clear() {   // this part resembles the componentWillUnmount()
      clearInterval(intervalRef);
    };
  }, []);

  let timeElement = (
    <h2>The current time is {currentTime.toLocaleString()}.</h2>
  );
  if (!isVisible) {
    timeElement = null;
  }

  return (
    <>
      <h1>Hello!</h1>
      {timeElement}
      <button onClick={() => setIsVisible(false)}>Disappear!</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);
