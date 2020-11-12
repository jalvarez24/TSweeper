import React, { useState } from 'react'
import './Cell.css'

interface Props {
    val?: number,
    setBombClicked: any,
}

const Cell: React.FC<Props> = ({ val, setBombClicked }) => {
    
    const [clicked, setClicked] = useState(false)

    return (
        <div
        className={clicked ? 'clicked-cell' : 'unclicked-cell'}
        onClick={() => {
            if(val === -1) {
                setBombClicked(true)
            }
            else {
                setClicked(true)
            }
        }}
        >
            {
                !clicked ?
                null :
                val === -1 ?
                '💣' :
                val
            }
        </div>
    )
}

export default Cell
