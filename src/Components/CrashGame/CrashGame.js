import React, { useState } from "react";
import './CrashGame.css'; 

function CrashGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [multiplier, setMultiplier] = useState(2);
  const [roundOutcome, setRoundOutcome] = useState("");

  const playRound = () => {
    // Generate a random outcome for the round  (between 1 and 10)  
    const outcome = (Math.random(100)*10).toFixed(2);
    setTimeout(() => {
      if (outcome < multiplier) {
        // You crashed at ${outcome}!
        setRoundOutcome(`Crashed  at ${outcome}!
        You lost your bet of ${betAmount} !!`);
        // Update the balance
        setBalance((parseFloat(balance - betAmount)));
      } else {
        // You survived this round
        setRoundOutcome(
          `Crashed  at ${outcome} 
          You won ${betAmount}!`,
          // Update the balance
            setBalance(parseFloat(balance + ((outcome * multiplier) - betAmount)))
        );
      }
    }, outcome * 1000);


  };

  // Handle the bet amount change
  const handleBetChange = (event) => {
    // Check if the bet amount is greater than 0
    if (event.target.value > 0)
    setBetAmount(event.target.value);
  };

    // Handle the Multiplier change
    const handleMultiplierChange = (event) => {
      // Check if the multiplier is greater than 0
      if (event.target.value > 0)
      setMultiplier(event.target.value);
    };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the bet amount is greater than the balance
    if (parseInt(betAmount) > balance) {
      // Alert the user
      alert("You do not have enough balance to place that bet!");
    } else {
      // Play the round
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
        <label>
          Multiplier:
          <input className="input" type="number" placeholder="2x" value={multiplier} onChange={handleMultiplierChange} />
        </label>
      </form>
      <p>{roundOutcome}</p>
    </div>
  );
}

export default CrashGame;
