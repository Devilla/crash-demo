import React, { useState } from "react";
import './CrashGame.css'; 

function CrashGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState();
  const [roundOutcome, setRoundOutcome] = useState("");

  const playRound = () => {
    const outcome = (Math.random(100)*10).toFixed(2);
    if (outcome < 2) {
      setRoundOutcome(`You crashed at  ${outcome}!
      You lost your bet of ${betAmount} !!`);
      setBalance(balance - parseFloat(betAmount));
    } else {
      setRoundOutcome(
        `You survived this round! ${outcome} 
        You won ${betAmount} but can continue betting.`,
          setBalance(balance + parseFloat(outcome * betAmount))
      );
    }
  };

  const handleBetChange = (event) => {
    if (event.target.value > 0)
    setBetAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(betAmount) > balance) {
      alert("You do not have enough balance to place that bet!");
    } else {
      playRound();
    }
  };

  return (
    <div>
      <h1>Welcome to the Crash Game!</h1>
      <h2>Your current balance is: {balance}</h2>
      <form onSubmit={handleSubmit}>
      <button className="button" type="submit">Start</button>
      <span> </span>
        <label>
          Bet amount:
          <input className="input" type="number" placeholder="Enter Bet" value={betAmount} onChange={handleBetChange} />
        </label>
      </form>
      <p>{roundOutcome}</p>
    </div>
  );
}

export default CrashGame;
