import React from 'react';
import logo from './logo.svg';
import './App.css';
import TempClass from './components/tempClass';

function App() {
  return (
    <div className="App">
      <TempClass name="test" phone_number={7676767676}/>
    </div>
  );
}

export default App;
