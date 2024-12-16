import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [test,setTest] = useState('test');
  
  function changeText() {

    setTest('test2');
  }

  return (
    <div className="App">
      <div>
        { test }
      </div>
      <button onClick={changeText}/>
    </div>
  );
}

export default App;
