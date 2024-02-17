import React, { useState } from "react";
import './CrashGame.css';

function CrashGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [multiplier, setMultiplier] = useState(2);
  const [crashArray, setCrashArray] = useState([]);
  const [outcome, setOutcome] = useState(0);
  const [number, setNumber] = useState(0.01);
  const [roundOutcome, setRoundOutcome] = useState("");

  const playRound = () => {
    setNumber(0.01);
    setOutcome(parseFloat(Math.random(100) * 10).toFixed(2));
    const interval = setInterval(() => {
      setNumber((number) => number + 0.1);
    }, 1);

    //stop the interval when number is greater than the outcome
    if (number >= outcome) {
      clearInterval(interval);
    }

    setTimeout(() => {
      if (outcome < multiplier) {
        setRoundOutcome(`Multiplier crash at ${outcome}!`);
        setBalance((parseFloat(balance - betAmount)));
        setCrashArray([...crashArray, outcome]);
      } else {
        setRoundOutcome(`Multiplier crash at ${outcome}!`);
        setBalance(parseFloat(balance + ((outcome * multiplier) - betAmount)))
        setCrashArray([...crashArray, outcome]);
        
        if (crashArray.length >= 4) {
          setCrashArray(crashArray.slice(1));
        }
      }
    }, outcome * 100);
  };

  const handleBetChange = (event) => {
    if (event.target.value > 0)
      setBetAmount(event.target.value);
  };

  const handleMultiplierChange = (event) => {
    if (event.target.value > 0)
      setMultiplier(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseFloat(betAmount) > balance) {
      alert("You do not have enough balance to place that bet!");
    } else {
      try {
        playRound();
      } catch (error) {
        console.log('An error occurred');
      }
    }
  };

  return (
    <div>
      <p id="nbr" style={{ color: multiplier < number ? "green" : "red" }}>{number.toFixed(2)}</p>
      <div className="balance">
        <label className="balance">${balance.toFixed(2)}</label>
        <label style={{ color: multiplier < roundOutcome ? "green" : "red" }}>{roundOutcome}</label>
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
      {crashArray[0] != null && <label className="last-crash">Last Crashes:</label>}
      <div className="crashArray">
        {/* Display crashArray elements */}
      </div>
    </div>
  );
}
        {crashArray && crashArray.map((crash, index) => (

          <span style={{color:multiplier<crash?"green":"red"}} key={index} className="crash">{crash} </span>
        ))}
        </div>
    </div>
  );
}

export default CrashGame;
