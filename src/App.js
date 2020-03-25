import React from 'react';
import './App.css';
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Random Card Generator</p>
      </header>
      <row className="cards">
        <div className="card1">
          <Card />
        </div>
        <div className="card2">
          <Card />
        </div> 
        <div className="card3">
          <Card />
        </div>
        </row>
    </div>
  );
}

export default App;
