import React, { useState } from "react";
import Time from "./Time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faGear } from "@fortawesome/free-solid-svg-icons";

const Timer = () => {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div>
      <section className="bg-white flex flex-col text-center max-w-2xl p-6 rounded-2xl shadow-lg">
        <div className="border-long border p-4 pr-8 pl-8  m-4 mt-0 rounded-full flex items-center">
          <img src="long_break.png" alt="" className="size-10 mr-4" />
          Long Break
        </div>
        <Time playing={isPlaying} />
        <div className="grid grid-flow-col grid-col-3 gap-4 mt-4 text-long">
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
