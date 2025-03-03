import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <section class="max-w-4xl mx-auto p-4 flex flex-row justify-between">
          <div>
            <a
              href="https://github.com/Marta-fn"
              title="Marta Nogueira's Github"
              className="text-3xl mr-4"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/martarfnogueira/"
              title="Marta Nogueira's LinkedIn"
              className="text-3xl"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div class="sm:gap-2 text-[8px] md:basis-1/4 basis-1/2 justify-items-endend sm:mt-0 mt-4">
            <a
              href="https://www.flaticon.com/free-icons/pomodoro-technique"
              title="pomodoro technique icons"
              target="_blank"
            >
              Pomodoro technique icons created by Freepik - Flaticon
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
