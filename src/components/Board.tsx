import React, { useState, useEffect } from 'react'

import Cell from './Cell'

interface Props {

}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<number>> | null>(null)

    useEffect(() => {
        let newBoard = []
        let count = 1;
        for (let i = 0; i < 10; i++) {
            let newRow = []
            for (let j = 0; j < 10; j++) {
                newRow.push(count++)
            }
            newBoard.push(newRow)
        }
        setBoard(newBoard)
    }, [])

    function getRandom(min: number = 0, max: number = 25000000) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div>
            Board:
            <div
                className='cellContainer'
                style={{
                    backgroundColor: 'lightgrey',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(10, 25px)',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {
                    board?.map((row, i) => {
                        return (
                            row.map((cell, index) => {
                                return (
                                    <div 
                                        key={cell}
                                        style={{
                                            backgroundColor: 'lightblue',
                                        }}
                                    >
                                        {cell}
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Board
