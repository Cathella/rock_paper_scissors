import React, { useState } from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  { id: 1, name: 'rock', component: Rock },
  { id: 2, name: 'paper', component: Paper },
  { id: 3, name: 'scissors', component: Scissors }
];

function App() {
  const [ userChoice, setUserChoice ] = useState(null);

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);
  }

  return (
    <div className="app">
      {/* game info here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* stats here */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* game state popup */}
      {/* <div className="game-state"></div> */}

      <div className="choices">
        {/* captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* computer choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}

export default App;
