import './App.css';
import CrashGame from './Components/CrashGame/CrashGame';
import SineWave from './Components/SineWave/SineWave';
import ExponentialGraphCanvas from './Components/ExponentialGraphCanvas/ExponentialGraphCanvas';

function App() {
  return (
    <div className="App">
      {/* <SineWave /> */}
      <ExponentialGraphCanvas />
      <footer className="App-footer">
        <CrashGame />
      </footer>
    </div>
  );
}

export default App;
