
  // Function to increment the number
 export default function Counter({ outcome }) {
    const [number, setNumber] = useState(0.01);
    console.log(outcome, number, "outcome, number");

    useEffect(() => {
      const interval = setInterval(() => {
        setNumber((number) => number + 0.01);
      }, 10);

      if (number >= outcome) {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }, [outcome]);

    return <p id="nbr">{number.toFixed(2)}</p>;
  }