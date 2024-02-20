import React from 'react';
import './App.css';
import MyNavbar from './Components/Navbar/MyNavbar';
import CrashGame from './Components/CrashGame/CrashGame';
import ExponentialGraphCanvas from './Components/ExponentialGraphCanvas/ExponentialGraphCanvas';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
      </header>
      <footer className="App-footer">
        <ExponentialGraphCanvas />
        <Provider store={store}>
          <CrashGame />
        </Provider>
      </footer>
    </div>
  );
}

export default App;

