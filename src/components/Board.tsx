import React, { useState, useEffect } from 'react'

import Cell from './Cell'

interface Props {

}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<number>> | null>(null)

    useEffect(() => {
        let newBoard = []
        for (let i = 0; i < 10; i++) {
            let newRow = []
            for (let j = 0; j < 10; j++) {
                newRow.push(0)
            }
            newBoard.push(newRow)
        }
        for(let i = 0; i < 10; i++) {
            while(true) {
                let x = Math.floor(getRandom(0, 10))
                let y = Math.floor(getRandom(0, 10))
                console.log(x)
                if(newBoard[x][y] !== 1) {
                    newBoard[x][y] = 1
                    break
                }
            }
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
                    gridTemplateColumns: 'repeat(10, 40px)',
                    gridTemplateRows: 'repeat(10, 40px)',
                    gap: '20px',
                    justifyContent: 'center',
                }}
            >
                {
                    board?.map((row, i) => {
                        return (
                            row.map((cell, index) => {
                                return ( 
                                    <Cell 
                                        key={index}
                                        val={cell}
                                    />
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
