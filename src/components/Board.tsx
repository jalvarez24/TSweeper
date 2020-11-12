import React, { useState, useEffect } from 'react'
import './Board.css'

import Cell from './Cell'

interface Props {

}

const Board: React.FC<Props> = () => {

    const [board, setBoard] = useState<Array<Array<number>> | null>(null)
    const [bombClicked, setBombClicked] = useState(false)

    useEffect(() => {
        setBoard(generateBoard())
    }, [])

    function generateBoard() {
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
                if(newBoard[x][y] !== -1) {
                    newBoard[x][y] = -1
                    break
                }
            }
        }
        for(let row = 0; row < newBoard.length; row++) {
            for(let col = 0; col < newBoard[0].length; col++) {
                let bombCount = 0
                if(row - 1 >= 0 && newBoard[row - 1][col] == -1) bombCount++
                if(row - 1 >= 0 && col + 1 < newBoard[0].length && newBoard[row - 1][col + 1] == -1) bombCount++
                if(col + 1 < newBoard[0].length && newBoard[row][col + 1] == -1) bombCount++
                if(row + 1 < newBoard.length &&  col + 1 < newBoard[0].length && newBoard[row + 1][col + 1] == -1) bombCount++
                if(row + 1 < newBoard.length && newBoard[row + 1][col] == -1) bombCount++
                if(row + 1 < newBoard.length && col - 1 >= 0 && newBoard[row + 1][col - 1] == -1) bombCount++
                if(col - 1 >= 0 && newBoard[row][col - 1] == -1) bombCount++
                if(row - 1 >= 0 && col - 1 >= 0 && newBoard[row - 1][col - 1] == -1) bombCount++

                if(bombCount && newBoard[row][col] != -1) newBoard[row][col] = bombCount                 
            }
        }

        return newBoard
    }

    function getRandom(min: number = 0, max: number = 25000000) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div className='boardContainer'>
            {
            bombClicked ?
            <div>
                <div>
                    You Lost!
                </div>
                <button 
                    onClick={() => {
                        setBombClicked(false)
                        generateBoard()
                    }}
                >
                    Restart game
                </button>
            </div>
            :
            <div>
                Board:
                <div className='board'>
                    {
                        board?.map((row, i) => {
                            return (
                                row.map((cell, index) => {
                                    return ( 
                                        <Cell 
                                            key={index}
                                            val={cell}
                                            setBombClicked={setBombClicked}
                                        />
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default Board
