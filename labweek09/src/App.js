import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [studentId, setStudentId] = useState('101183697');
  const [name, setName] = useState('Ali Yousuf');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p>{studentId}</p>
        <p>{name}</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
