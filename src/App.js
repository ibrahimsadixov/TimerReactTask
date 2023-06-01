import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import './App.css';
let clicked = false
function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const start = document.getElementById("start")

  const handleStart = () => {
    if (clicked) {
      clicked=false
      setIsRunning(false);
      setResetTimer(false);
      start.innerHTML="Start"
    }
    else if (!clicked) {
      clicked=true
      setIsRunning(true);
      setResetTimer(false);
      start.innerHTML="Stop"
    }

  };

  const handleReset = () => {
    clicked=false
    setResetTimer(true);
    start.innerHTML="Start"
  };

  return (
    <div className="App">
      <div className='timer'>
        <Timer isRunning={isRunning} resetTimer={resetTimer} />
        <div className='buttons'>
          <button onClick={handleStart} id="start">Start</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
