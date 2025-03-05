import React, { useState, useRef, useEffect } from "react";

const Time = ({ playing }) => {
  const [timeLeft, settimeLeft] = useState(1500);
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (playing) {
      startTimer();
    }
    if (!playing) {
      pauseTimer();
    }
  }, [playing]);

  return (
    <div className="text-8xl">
      {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
      <br />
      {String(timeLeft % 60).padStart(2, "0")}
    </div>
  );
};

export default Time;
