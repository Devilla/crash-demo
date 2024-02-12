import './App.css';
import { PIXIComponent } from './Components/PIXIComponent/PIXIComponent';
import CrashGame from './Components/CrashGame/CrashGame';
import SineWave from './Components/SineWave/SineWave';

function App() {
  return (
    <div className="App">
      <SineWave />
      <footer className="App-footer">
        <CrashGame />
      </footer>
    </div>
  );
}

export default App;
