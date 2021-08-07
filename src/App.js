import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import headshot from "./img/headshot.jpg";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/experiences' exact component={Experiences} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/interests' exact component={Interests} />
        </Switch>
        <Footer /> */}
    </Router>
  );
}

export default App;
