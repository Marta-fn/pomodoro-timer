import React, { useState } from "react";
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
          <button>
            <FontAwesomeIcon
              icon={faPause}
              onClick={() => setisPlaying(false)}
            />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlay} onClick={() => setisPlaying(true)} />
          </button>
          <button>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Timer;
