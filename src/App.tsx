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
      <div style={{
        backgroundColor: 'lightgrey',
        height: '100vh',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 250px 230px',
          gridAutoRows: '250px',
          gap: '20px',
          justifyContent: 'center',
        }}>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
          <div style={blue}>Cell</div>
        </div>
      </div>
      <Board/>
    </div>
  );
}

export default App; 
