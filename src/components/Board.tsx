import React, { useState, useEffect } from 'react'

import Cell from './Cell'

interface Props {
    
}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<any>> | null>(null)
    const [test, setTest] = useState([1,2,3])
    
    useEffect(() => {
        let newBoard = []
        for(let i = 0; i < 10; i++) {
            let newRow = []
            for(let j = 0; j < 10; j++) {
                newRow.push(i + 1)
            } 
            newBoard.push(newRow)
        }
        setBoard(newBoard)
    }, [])

    return (
        <div>
            Board: {board}
            {
                board?.map((row) => {
                    for(let i = 0; i < row.length; i++) {
                        console.log(i)
                    }
                })
            }
        </div>
    )
}

export default Board
