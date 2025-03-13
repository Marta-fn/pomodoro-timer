import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";

const App = () => {
  return (
    <div className="dark:bg-[#1C1C1D] bg-[#f2f4f7]">
      <Header />
      <div className="flex flex-col section-min-height">
        <main className="flex-grow flex items-center justify-center">
          <Timer />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
