import React from "react";
import headshot from "./img/headshot.jpg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>Merissa Li</h1>
      <h2>Author: Merissa Li</h2>
      <img src={headshot} alt='headshot' />
    </div>
  );
}

export default App;
