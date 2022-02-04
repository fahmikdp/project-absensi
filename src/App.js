import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";
import SaveButton from "./components/Button";
import Search2 from "./components/Search2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <br />
      <Card />
      <SaveButton />
    </div>
  );
}

export default App;
