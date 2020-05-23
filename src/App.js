import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route component={LandingPage} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
