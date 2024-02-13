import './App.css';
import CrashGame from './Components/CrashGame/CrashGame';
import Animation from './Components/Animation/Animation';

function App() {
  return (
    <div className="App">
      <Animation />
      <footer className="App-footer">
        <CrashGame />
      </footer>
    </div>
  );
}

export default App;
