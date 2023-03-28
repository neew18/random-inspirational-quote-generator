import "./App.css";
import React from "react";
import Header from "./components/header";
import Description from "./components/Description";

function App() {
  return (
    <main className="App bg-violet-100 p-3">
      <Header />
      <Description />
    </main>
  );
}

export default App;
