import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
