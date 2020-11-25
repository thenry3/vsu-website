import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Membership from "./pages/Membership";
import HOPE from "./pages/HOPE";
import SEACLEAR from "./pages/SEACLEAR";
import Page404 from "./pages/404";

export default function App() {
  return (
    <>
      <Router>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/membership" component={Membership}></Route>
          <Route path="/hope" component={HOPE}></Route>
          <Route path="/seaclear" component={SEACLEAR}></Route>
          <Route component={Page404}></Route>
      </Router>
    </>
  );
}
