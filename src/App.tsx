import React, { useState, useEffect } from 'react';
import Board from './components/Board'
import './App.css';

import { Stage, Layer, Rect, Text, Star } from 'react-konva';
import Konva from 'konva';
import { shapes } from 'konva/types/Shape';

function RectComp() {
  return (
    <Rect
      x={20}
      y={20}
      width={100}
      height={50}
      fill="blue"
      draggable
    />
  )
}

function App() {

  const [shapesArray, setShapesArray] = useState([1, 2, 3])

  function createRect() {
    setShapesArray(prevState => {
      return [...prevState, prevState[prevState.length - 1] + 1]
    })
  }

  useEffect(() => {
    console.log(shapesArray)
  }, [shapesArray])

  return (
    <div className="App">
      <div style={{
        backgroundColor: 'lightgrey',
      }}>
      <Stage width={window.outerWidth} height={500}>
        <Layer>
          {
            shapesArray.map((num) => {
              return(
                <RectComp key={num} />
              )
            })
          }
          {/*
          <Star
            x={40}
            y={20}
            numPoints={5}
            innerRadius={20}
            outerRadius={1}
            width={100}
            height={100}
            fill="red"
            draggable
          /> 
          */}
        </Layer>
      </Stage>
      </div>
      <button onClick={() => createRect()}>
        Add Rect
      </button>
      {/* <Board/> */}
    </div>
  );
}

export default App; 
