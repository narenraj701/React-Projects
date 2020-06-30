import React from 'react';
import './App.css';
import useCounter from './useCounter';
function App() {
    const counter=useCounter(0,10);
    const second=useCounter(10,5);
  return (
    <div>
      {counter}
      {second}
    </div>
  );
}

export default App;
