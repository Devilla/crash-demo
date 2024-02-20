import './App.css';
import CrashGame from './Components/CrashGame/CrashGame';
import ExponentialGraphCanvas from './Components/ExponentialGraphCanvas/ExponentialGraphCanvas';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
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

