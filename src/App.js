import './App.css';
import { MyComponent } from './Components/MyComponent/MyComponent';
import CrashGame from './Components/CrashGame/CrashGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crash Game</h1>
        <MyComponent />
        <CrashGame />
      </header>
    </div>
  );
}

export default App;
