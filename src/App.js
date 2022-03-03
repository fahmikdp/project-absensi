import React from "react";
import Dashboard from "./pages/Dashboard";
import FormAbsensi from "./pages/FormAbsensi";
import Absensi from "./pages/KetAbsensi";
import Formijin from "./pages/Formijin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Formijin from "./pages/Formijin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/formizin" exact component={Formijin} />
          <Route path="/formabsensi" component={FormAbsensi} />
          <Route path="/absensi" component={Absensi} />
        </Switch>
        {/* <Formijin /> */}
      </div>
    </Router>
  );
}

export default App;
