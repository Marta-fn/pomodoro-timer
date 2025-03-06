import React from "react";
import focus from "./assets/focus.png";
import short from "./assets/short_break.png";
import long from "./assets/long_break.png";

const sessionIcons = {
  "Focus Time": focus,
  "Short Break": short,
  "Long Break": long,
};

const Icon = ({ session }) => {
  const icon = sessionIcons[session];

  return (
    <div>
      <img src={icon} alt={session + "Icon"} className="size-10 mr-4" />
    </div>
  );
};

export default Icon;
