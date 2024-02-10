import logo from './logo.svg';
import './App.css';
import { MyComponent } from './Components/MyComponent/MyComponent';
import CrashGame from './Components/CrashGame/CrashGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <CrashGame />
      </header>
    </div>
  );
}

export default App;
