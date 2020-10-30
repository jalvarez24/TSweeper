import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Board from './components/Board'
import './App.css';

import { Stage, Layer, Rect, Text, Star } from 'react-konva';
import Konva from 'konva';
import { shapes } from 'konva/types/Shape';

const RectComp = ({ color, idx, x, y, shapesArray, setShapesArray }: shapeProps) => {
  const [moving, setMoving] = useState(false)
  
  function moveCurrentShapeToFront() {
    if(setShapesArray) {
      setShapesArray((prevState) => {
        return [
          ...prevState.filter((shape) => shape.idx !== idx),
          {color, idx, x, y},
        ]
      })
    }
  }

  return (
    <Rect
      x={x}
      y={y}
      width={200}
      height={100}
      fill={moving ? `${color}50` : color}
      draggable
      onDragStart={() => {
        moveCurrentShapeToFront()
        setMoving(true)
      }}
      onDragEnd={() => {
        setMoving(false)
      }}
      
    />
  )
}

interface shapeProps {
  color: string,
  idx: number,
  x: number,
  y: number,
  shapesArray?: shapeProps[],
  setShapesArray?: Dispatch<SetStateAction<shapeProps[]>>,
}

function App() {

  const [shapesArray, setShapesArray] = useState<shapeProps[]>([])

  function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  function getRandomCoordinates() {
    return [Math.floor(Math.random() * (window.innerWidth)), Math.floor(Math.random() * (750))]; 
  }

  function createRect() {
    let newRectColor = "#" + getRandomColor()
    let [newXCoor, newYCoor] = getRandomCoordinates()
    if(!shapesArray.length) {
      setShapesArray([{color: newRectColor, idx: 1, x: newXCoor, y: newYCoor}]) 
    }
    else {
      setShapesArray(prevState => {
        return [...prevState, {
          color: newRectColor,
          idx: prevState.length + 1,
          x: newXCoor,
          y: newYCoor,
        }]
      })
    }
  }

  //for bug testing only
  useEffect(() => {
    // console.log(shapesArray)
  }, [shapesArray])

  return (
    <div className="App">
      <div style={{
        backgroundColor: 'lightgrey',
      }}>
      <Stage width={window.innerWidth} height={750}>
        <Layer>
          {
            shapesArray.map((props) => {
              return(
                <RectComp key={props.idx} color={props.color} idx={props.idx} x={props.x} y={props.y} shapesArray={shapesArray} setShapesArray={setShapesArray} />
              )
            })
          }
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
