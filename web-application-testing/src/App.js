import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] =useState(0);

const addBall = () => {
  if (balls === 4){
    setBalls(0)
    setStrikes(0)
    } else {
    setBalls(balls +1)
  }
}

const addStrike = () => {
  if (strikes === 3){
    setBalls(0)
    setStrikes(0)
  } else {
  setStrikes(strikes + 1)
  }
}

const addFoul = () =>{
if (strikes === 2){
    setStrikes(2)
  } else if (strikes<2){
    setStrikes(strikes +1)
  }
}

const addHit = () => {
  setBalls(0)
  setStrikes(0)
}

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls}/>
      <Dashboard 
        addStrike={addStrike} 
        addBall={addBall} 
        addFoul={addFoul} 
        addHit={addHit}
      />
    </div>
  );
}

export default App;
