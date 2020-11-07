import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Board from './components/Board'
import './App.css';

function App() {

  const blue = {
    backgroundColor: 'lightblue',
    padding: '10px',
    // margin: '5px',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App; 
