import React, { useState, useRef, useEffect } from "react";
import sound from "./assets/mixkit-soft-bell-countdown.wav";

const Time = ({
  playing,
  session,
  setsession,
  focusTime,
  shortBreak,
  longBreak,
}) => {
  const [timeLeft, settimeLeft] = useState(1500);
  const [workNum, setworkNum] = useState(1);
  const [sessionNum, setsessionNum] = useState(0);
  const intervalRef = useRef(null);

  function playSound() {
    new Audio(sound).play();
  }

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
            if (session === "Long Break") {
              setsessionNum(sessionNum + 1);
            }
            setsession("Focus Time");
          }
          return 0;
        }
        if (prevTimeLeft === 3) {
          playSound();
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
      settimeLeft(focusTime * 60);
      startTimer();
    } else if (session === "Short Break") {
      settimeLeft(shortBreak * 60);
      startTimer();
    } else if (session === "Long Break") {
      settimeLeft(longBreak * 60);
      setworkNum(1);
      startTimer();
    }
  }, [session]);

  useEffect(() => {
    if (!playing) {
      settimeLeft(focusTime * 60);
    }
  }, [focusTime]);

  return (
    <div>
      <div className="text-8xl dark:text-gray-50">
        {String(Math.floor(timeLeft / 60)).padStart(2, "0")}
        <br />
        {String(timeLeft % 60).padStart(2, "0")}
      </div>
      <div className="mt-6 mb-2">
        <p className="text-[12px] text-gray-700 dark:text-gray-300">
          Work sessions completed: {sessionNum}
        </p>
      </div>
    </div>
  );
};

export default Time;
