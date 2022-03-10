
import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';

function App() {
  const [show, setShow] =useState(true);
  return (
    <div className="App">
      <div className='timer'>
      { show ?<Timer /> : ""}
      </div>
      <br />
      <div>
      <button onClick={()=>{
        setShow(!show)
      }}>Hide timer</button>
      </div>
    </div>
  );
}

export default App;
