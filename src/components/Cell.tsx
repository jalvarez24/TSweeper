import React, { useState } from 'react'
import './Cell.css'

interface Props {
    val?: number
}

const Cell: React.FC<Props> = ({ val }) => {
    
    const [clicked, setClicked] = useState(false)

    return (
        <div
        className={clicked ? 'cell' : 'unclicked-cell'}
        onClick={() => {
            setClicked(true);
        }}
        >
            {
                !clicked ?
                null:
                val === 1 ?
                '💣':
                null
            }
        </div>
    )
}

export default Cell
