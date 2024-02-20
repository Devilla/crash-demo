import React, { useState } from "react";
import './CrashGame.css';

import { useSelector, useDispatch } from 'react-redux';
import { setBetAmount, setMultiplier } from './actions';

const CrashGame = () => {
  const [balance, setBalance] = useState(1000);
  // const [betAmount, setBetAmount] = useState(10);
  // const [multiplier, setMultiplier] = useState(2);
  const [crashArray, setCrashArray] = useState([]);
  const [outcome, setOutcome] = useState(0);
  const [number, setNumber] = useState(0.01);
  const [roundOutcome, setRoundOutcome] = useState("");
  const dispatch = useDispatch();

  const betAmount = useSelector(state => state.betAmount);
  const multiplier = useSelector(state => state.multiplier);

    // Generate a random outcome for the round  (between 1 and 10)  
    // setOutcome(parseFloat();
  const playRound = () => {
    setNumber(0.01);
    // Generate a random outcome for the round  (between 1 and 10)  
    setOutcome(parseFloat(Math.random(100)*10).toFixed(2));
    const interval = setInterval(() => {
      setNumber((number) => number + 0.1);
    }, 1);
  
      //stop the interval when numbre is greater than the outcome
      if (number >= outcome) {
        clearInterval(interval);
      }
    setTimeout(() => {
      if (outcome < multiplier) {
        setRoundOutcome(`Multiplier crash at  ${outcome}!`);
        // Update the balance
        setBalance((parseFloat(balance - betAmount)));
        // Add the outcome to the crash array
        setCrashArray([...crashArray, outcome]);
      } else {
        setRoundOutcome(`Multiplier crash at  ${outcome}!`);
          // Update the balance
            setBalance(parseFloat(balance + ((outcome * multiplier) - betAmount)))
        // Add the outcome to the crash array
        setCrashArray([...crashArray, outcome]);
        // delete the first element of the array if it has more than 10 elements
        if (crashArray.length >= 4) {
          setCrashArray(crashArray.slice(1));
        }
      }
    },100);
  };

  // Handle the bet amount change
  const handleBetChange = (event) => {
    // Check if the bet amount is greater than 0
    if (event.target.value > 0)
    setBetAmount(event.target.value);
    dispatch(setBetAmount(event.target.value));
  };

    // Handle the Multiplier change
    const handleMultiplierChange = (event) => {
      // Check if the multiplier is greater than 0
      if (event.target.value > 0)
      setMultiplier(event.target.value);

    dispatch(setMultiplier(event.target.value));

    };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the bet amount is greater than the balance
    if (parseFloat(betAmount) > balance) {
      // Alert the user
      alert("You do not have enough balance to place that bet!");
    } else {
      try {
          // Play the round
          playRound();
      } catch (error) {
        console.log('An error occurred');
      }

    }
  };

  return (
    <div id="crash-game">
      <p id="nbr" style={{color:multiplier<number?"green":"red"}}>{number.toFixed(2)}</p>
      <div className="balance">
        <label className="balance">${balance.toFixed(2)}</label>
        <label style={{color:multiplier<roundOutcome?"green":"red"}}>{roundOutcome}</label>
      </div>
      <form onSubmit={handleSubmit}>
      <button>Play</button>
      <span> </span>
        <label>
          Bet amount:
          <input className="input" type="number" placeholder="Enter Bet" value={betAmount} onChange={handleBetChange} />
        </label>
        <label>
          Multiplier:
          <input className="input" type="number" placeholder="2x" value={multiplier} onChange={handleMultiplierChange} />
        </label>
      </form>
      {crashArray[0]!=null && <label className="last-crash">Last Crashes:</label>}
      <div className="crashArray">
        {crashArray && crashArray.map((crash, index) => (

          <span style={{color:multiplier<crash?"green":"red"}} key={index} className="crash">{crash} </span>
        ))}
        </div>
    </div>
  );
}

export default CrashGame;
