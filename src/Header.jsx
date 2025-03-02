import React from "react";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0">
        <section className="flex items-center ml-5">
          <img src="/pomodoro-technique.png" alt="" className="size-12 m-4" />
          <h1 className=" font-bold">Pomodoro Timer</h1>
        </section>
      </header>
    </div>
  );
};

export default Header;
