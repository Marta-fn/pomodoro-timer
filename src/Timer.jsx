import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faGear } from "@fortawesome/free-solid-svg-icons";

const Timer = () => {
  return (
    <div>
      <section className="bg-white flex flex-col text-center max-w-2xl p-6 rounded-2xl shadow-lg">
        <div className="border-long border p-4 pr-8 pl-8  m-4 mt-0 rounded-full flex items-center">
          <img src="long_break.png" alt="" className="size-10 mr-4" />
          Long Break
        </div>
        <div className="text-8xl">
          15
          <br />
          00
        </div>
        <div className="grid grid-flow-col grid-col-3 gap-4 mt-4 text-long">
          <button>
            <FontAwesomeIcon icon={faPause} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlay} />
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
