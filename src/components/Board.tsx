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

    function getRandom(min: number = 0, max: number = 20000000) {
        return Math.random() * (max - min) + min;
    }

    return (
        <div>
            Board: {board}
            {
                // board?.map((row) => {
                //     row.map((c) => {
                //         console.log(c)
                //         return <Cell key={getRandom()} val={c} />
                //     })
                // })
                board?.map((row) => row).map((c) => {
                    console.log(c)
                    return <Cell /> 
                })
                
                // this.state.report.map(({ monthlytarget }) => Object.entries(monthlytarget))
                // .flat()
                // .map(([key,value], index) => (
                //     <tr key={index}>
                //     </tr>
                // ));
                
                    // for(let i = 0; i < row.length; i++) {
                    //     console.log('yooooo')
                    //     return <Cell key={getRandom()} val={row[i]} />
                    // }
            }
        </div>
    )
}

export default Board
