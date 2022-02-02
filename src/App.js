import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Message from './Food';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div><center><p>{count} Items</p>
    <button id="btn" onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </center>
  </div>  
  );
}
export default App;