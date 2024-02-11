import React, { useState } from "react";
import './CrashGame.css'; 

function CrashGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [multiplier, setMultiplier] = useState(2);
  const [roundOutcome, setRoundOutcome] = useState("");
  const [crashArray, setCrashArray] = useState([]);
  const [outcome, setOutcome] = useState(0);
  const playRound = () => {
    // Generate a random outcome for the round  (between 1 and 10)  
    setOutcome(parseInt(Math.random(100)*10)) //.toFixed(2);
    setTimeout(() => {
      if (outcome < multiplier) {
        // You crashed at ${outcome}!
        console.log(`Crash: ${outcome}! You lost your bet of ${betAmount} !!`);
        // Update the balance
        setBalance((parseInt(balance - betAmount)));
        // Add the outcome to the crash array
        setCrashArray([...crashArray, outcome]);
      } else {
        // You survived this round
        console.log(
          `Crash: ${outcome} You won ${betAmount*multiplier}!`,
          // Update the balance
            setBalance(parseInt(balance + ((outcome * multiplier) - betAmount)))
        );
        // Add the outcome to the crash array
        setCrashArray([...crashArray, outcome]);
      }
    }, 1000);
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
      <div className="balance">
        <label className="balance">Balance: {balance}</label>
      </div>
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
   
      {crashArray[0]!=null && <label className="last-crash">Last Crashes:</label>}
      <div className="crashArray">
        {crashArray && crashArray.map((crash, index) => (
          <span style={{color:multiplier<crash?"#4CAF50":"red"}} key={index} className="crash">{crash} </span>
        ))}
        </div>
    </div>
  );
}

export default CrashGame;
