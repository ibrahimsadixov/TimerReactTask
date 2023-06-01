import React, { useState, useEffect } from 'react';

function Timer({ isRunning, resetTimer }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId = 0;

    if (isRunning && !resetTimer) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      if (resetTimer) {
        setSeconds(0);
      }
    }

    return () => clearInterval(intervalId);
  }, [isRunning, resetTimer]);

  return <div>{seconds}</div>;
}

export default Timer;
