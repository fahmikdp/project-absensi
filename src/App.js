import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Search />
      <br />
      <Card />
      <br />
      <Card />
    </div>
  );
}

export default App;
