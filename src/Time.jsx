import React, { useState, useEffect } from "react";
import sound from "./assets/mixkit-soft-bell-countdown.wav";

const worker = new Worker(new URL("./timeWorker.js", import.meta.url));

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

  function playSound() {
    new Audio(sound).play();
  }

  // Info recived by the worker
  worker.onmessage = function (e) {
    settimeLeft(e.data.timeLeft);

    if (e.data.timeLeft === 3) {
      playSound();
    }

    if (e.data.timeLeft === 0) {
      if (session === "Focus Time") {
        setworkNum(workNum + 1);
        setsession(workNum === 4 ? "Long Break" : "Short Break");
      } else if (session === "Short Break" || session === "Long Break") {
        if (session === "Long Break") {
          setsessionNum(sessionNum + 1);
        }
        setsession("Focus Time");
      }
    }
  };

  // Start and Pause the timer
  useEffect(() => {
    if (playing) {
      worker.postMessage({ command: "start", time: timeLeft });
    }
    if (!playing) {
      worker.postMessage({ command: "pause" });
    }
  }, [playing]);

  // Alternates timeLeft beetween the sessions
  useEffect(() => {
    let newTime;
    if (session === "Focus Time") {
      newTime = focusTime * 60;
    } else if (session === "Short Break") {
      newTime = shortBreak * 60;
    } else if (session === "Long Break") {
      newTime = longBreak * 60;
      setworkNum(1);
    }

    settimeLeft(newTime);

    if (playing) {
      worker.postMessage({ command: "start", time: newTime });
    }
  }, [session]);

  // Updates Focus Time when is the first time using the timer and is on pause.
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
