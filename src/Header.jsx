import React from "react";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0">
        <section className="flex items-center max-w-4xl mx-auto p-4">
          <img src="/pomodoro-technique.png" alt="" className="size-12 mr-4" />
          <h1 className="font-bold">Pomodoro Timer</h1>
        </section>
      </header>
    </div>
  );
};

export default Header;
