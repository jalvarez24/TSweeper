import React, { useState, Dispatch, SetStateAction } from 'react'

import { Stage, Layer, Rect, Text, Star } from 'react-konva';
import Konva from 'konva';

import RectComp from './RectComp'
import { createImportSpecifier } from 'typescript';

interface shapeProps {
    color: string,
    idx: number,
    x: number,
    y: number,
    shapesArray?: shapeProps[],
    setShapesArray?: Dispatch<SetStateAction<shapeProps[]>>,
}

const KonvaComp = () => {
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
  
    return (
        <>
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
        </>
    )
  }

export default KonvaComp
