import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LandingPage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
