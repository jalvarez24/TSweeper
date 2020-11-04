import React, { useState, Dispatch, SetStateAction } from 'react'

import { Rect } from 'react-konva';
import Konva from 'konva';
import { createImportSpecifier } from 'typescript';

interface shapeProps {
    color: string,
    idx: number,
    x: number,
    y: number,
    shapesArray?: shapeProps[],
    setShapesArray?: Dispatch<SetStateAction<shapeProps[]>>,
}

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
        stroke={moving ? '#00000050' : '#000000'}
        strokeWidth={4}
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

export default RectComp
