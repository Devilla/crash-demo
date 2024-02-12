import React, { useEffect,useState } from "react";
import './CrashGame.css'; 

// Function to increment the number
function Counter() {
  const [number, setNumber] = useState(0.01);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 0.01));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p id="nbr">{number.toFixed(2)}</p>;
}

function CrashGame() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [multiplier, setMultiplier] = useState(2);
  const [roundOutcome, setRoundOutcome] = useState("");
  const [crashArray, setCrashArray] = useState([]);
  const [outcome, setOutcome] = useState(0);
  const playRound = () => {
    // Generate a random outcome for the round  (between 1 and 10)  
    setOutcome(parseFloat(Math.random(100)*10).toFixed(2));
    setTimeout(() => {
      if (outcome < multiplier) {
        // You crashed at ${outcome}!
        console.log(`Crash: ${outcome}! You lost your bet of ${betAmount} !!`);
        // Update the balance
        setBalance((parseFloat(balance - betAmount)));
        // Add the outcome to the crash array
        setCrashArray([...crashArray, outcome]);
      } else {
        // You survived this round
        console.log(
          `Crash: ${outcome} You won ${betAmount*multiplier}!`,
          // Update the balance
            setBalance(parseFloat(balance + ((outcome * multiplier) - betAmount)))
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
    if (parseFloat(betAmount) > balance) {
      // Alert the user
      alert("You do not have enough balance to place that bet!");
    } else {
      // Play the round
      playRound();
    }
  };

  // Handle the play again button
  const handlePlayAgain = () => {
    setCrashArray([]);
    Counter("nbr");
  };

  return (
    <div>
      <Counter />
      <div className="balance">
        <label className="balance">${balance.toFixed(2)}</label>
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
          <span style={{color:multiplier<crash?"#4CAF50":"red"}} key={index} className="crash">{crash} </span>
        ))}
        </div>
    </div>
  );
}

export default CrashGame;
