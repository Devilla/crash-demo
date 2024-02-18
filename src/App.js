import './App.css';
import CrashGame from './Components/CrashGame/CrashGame';
import ExponentialGraphCanvas from './Components/ExponentialGraphCanvas/ExponentialGraphCanvas';

function App() {
  return (
    <div className="App">
      <footer className="App-footer">
        <ExponentialGraphCanvas />
        <CrashGame />
      </footer>
    </div>
  );
}

export default App;
