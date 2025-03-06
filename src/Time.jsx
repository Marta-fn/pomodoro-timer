import React, { useState, useRef, useEffect } from "react";

const Time = ({ playing }) => {
  const [timeLeft, settimeLeft] = useState(1500);
  const [session, setsession] = useState("work");
  const [workNum, setworkNum] = useState(1);
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          if (session === "work") {
            setworkNum(workNum + 1);
            setsession(workNum === 4 ? "long" : "short");
          } else if ((session === "short") | (session === "long")) {
            setsession("work");
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
    if (session === "work" && playing) {
      settimeLeft(1500);
      startTimer();
    } else if (session === "short") {
      settimeLeft(300);
      startTimer();
    } else if (session === "long") {
      settimeLeft(900);
      setworkNum(1);
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
