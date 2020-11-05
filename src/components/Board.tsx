import React, { useState, useEffect } from 'react'

import Cell from './Cell'

interface Props {
    
}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<number>> | null>(null)
    const [test, setTest] = useState([1,2,3])
    
    useEffect(() => {
        let newBoard = []
        let count = 1;
        for(let i = 0; i < 10; i++) {
            let newRow = []
            for(let j = 0; j < 10; j++) {
                newRow.push(count++)
            } 
            newBoard.push(newRow)
        }
        setBoard(newBoard)
    }, [])

    function getRandom(min: number = 0, max: number = 20000000) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div>
            Board:
            {
                board?.map((row, i) => {
                    return (
                        <div>
                            {row}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board
