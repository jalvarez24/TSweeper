import React, { useState, useEffect } from 'react'

interface Props {
    
}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<any>> | null>(null)
    
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
        </div>
    )
}

export default Board
