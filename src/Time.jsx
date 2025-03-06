import React, { useState, useRef, useEffect } from "react";

const Time = ({ playing, session, setsession }) => {
  const [timeLeft, settimeLeft] = useState(1500);
  const [workNum, setworkNum] = useState(1);
  const [sessionNum, setsessionNum] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          if (session === "Focus Time") {
            setworkNum(workNum + 1);
            setsession(workNum === 4 ? "Long Break" : "Short Break");
          } else if ((session === "Short Break") | (session === "Long Break")) {
            setsession("Focus Time");
          }
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

  useEffect(() => {
    if (session === "Focus Time" && playing) {
      settimeLeft(1500);
      startTimer();
    } else if (session === "Short Break") {
      settimeLeft(300);
      startTimer();
    } else if (session === "Long Break") {
      settimeLeft(900);
      setworkNum(1);
      setsessionNum(sessionNum + 1);
      startTimer();
    }
  }, [session]);

  return (
    <div className="text-8xl">
      {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
      <br />
      {String(timeLeft % 60).padStart(2, "0")}
    </div>
  );
};

export default Time;
