import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import headshot from "./img/headshot.jpg";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>l
        <Route path='/' exact component={Home} />
        {/* <Route path='/about' exact component={InfoSection} /> */}
        {/* <Route path='/experiences' exact component={Experiences} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/interests' exact component={Interests} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
