import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div>Focus/Pause/Long Pause</div>
        <div>Time</div>
        <div>Control buttons</div>
      </main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/pomodoro-technique"
          title="pomodoro technique icons"
        >
          Pomodoro technique icons created by Freepik - Flaticon
        </a>{" "}
        <br />
        Project info
      </footer>
    </div>
  );
};

export default App;
