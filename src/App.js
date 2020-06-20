import React from 'react';
import Ping from './components/ping'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>PollPlus</h1>
        <p>Welcome to PollPlus.</p>
            <p><Ping/></p>
        <a href="create">Create Poll</a>
    </div>
  );
}

export default App;
