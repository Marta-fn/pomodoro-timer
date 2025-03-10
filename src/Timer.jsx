import React, { useState, useEffect } from "react";
import Time from "./Time";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faGear } from "@fortawesome/free-solid-svg-icons";

const sessionStyles = {
  "Focus Time": "border-[#ff6e80] text-[#ff6e80]",
  "Short Break": "border-[#f8d071] text-[#f8d071]",
  "Long Break": "border-[#4cbf6f] text-[#4cbf6f]",
};

const Timer = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const [session, setsession] = useState("Focus Time");
  const [open, setOpen] = useState(true);

  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleFocusChange = (e) => setFocusTime(Number(e.target.value));
  const handleShortChange = (e) => setShortBreak(Number(e.target.value));
  const handleLongChange = (e) => setLongBreak(Number(e.target.value));

  return (
    <div>
      <section className="bg-white flex flex-col text-center max-w-2xl p-6 rounded-2xl shadow-lg">
        <div
          className={`border p-4 pr-8 pl-8 m-4 mt-0 rounded-full flex items-center ${
            sessionStyles[session].split(" ")[0]
          }`}
        >
          <Icon session={session} />
          <p>{session}</p>
        </div>
        <Time playing={isPlaying} session={session} setsession={setsession} />
        <div
          className={`grid grid-flow-col grid-col-3 gap-4 mt-4 ${
            sessionStyles[session].split(" ")[1]
          }`}
        >
          <button
            id="pause"
            disabled={!isPlaying}
            className="hover:scale-150 cursor-pointer disabled:text-gray-400 disabled:scale-100 disabled:cursor-auto"
          >
            <FontAwesomeIcon
              icon={faPause}
              onClick={() => setisPlaying(false)}
            />
          </button>
          <button
            id="play"
            disabled={isPlaying}
            className="hover:scale-150 cursor-pointer disabled:text-gray-400 disabled:scale-100 disabled:cursor-auto"
          >
            <FontAwesomeIcon icon={faPlay} onClick={() => setisPlaying(true)} />
          </button>
          <button>
            <FontAwesomeIcon icon={faGear} onClick={() => setOpen(true)} />
          </button>
        </div>
        <dialog open={open} onClose={setOpen} className="relative z-10">
          <div className="fixed inset-0 bg-gray-500/75">
            <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
              <div className="relative overflow-hidden rounded-lg text-left shadow-xl sm:w-2xs">
                <div className="bg-white px-4 p-6 pb-4">
                  <p className="font-semibold text-gray-900 text-center sm:text-left sm:mt-0 ">
                    Time Settings
                  </p>
                  <div className="mt-2">
                    <form className="grid grid-cols-2 gap-1 items-center">
                      <label htmlFor="focusTime">Focus Time</label>
                      <input
                        type="number"
                        id="focusTime"
                        min={0}
                        value={focusTime}
                        onChange={handleFocusChange}
                        className="bg-gray-100 p-2 rounded-lg text-center"
                      />
                      <label htmlFor="short">Short Break</label>
                      <input
                        type="number"
                        id="short"
                        min={0}
                        value={shortBreak}
                        onChange={handleShortChange}
                        className="bg-gray-100 p-2 rounded-lg text-center"
                      />
                      <label htmlFor="long">Long Break</label>
                      <input
                        type="number"
                        id="long"
                        min={0}
                        value={longBreak}
                        onChange={handleLongChange}
                        className="bg-gray-100 p-2 rounded-lg text-center"
                      />
                    </form>
                  </div>
                </div>
                <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </section>
    </div>
  );
};

export default Timer;
