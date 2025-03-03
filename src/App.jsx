import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div>Focus/Pause/Long Pause</div>
        <div>Time</div>
        <div>Control buttons</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
