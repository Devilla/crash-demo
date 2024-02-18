import './App.css';
import CrashGame from './Components/CrashGame/CrashGame';
import ExponentialGraphCanvas from './Components/ExponentialGraphCanvas/ExponentialGraphCanvas';

function App() {
  return (
    <div className="App">
      <ExponentialGraphCanvas />
      <footer className="App-footer">
        <CrashGame />
      </footer>
    </div>
  );
}

export default App;
