import React from "react";
import FormAbsensi from "./pages/FormAbsensi";
import Absensi from "./pages/KetAbsensi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FormAbsensi} />
          <Route path="/absensi" component={Absensi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
