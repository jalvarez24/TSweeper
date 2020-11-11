import React, { useState } from 'react'
import './Cell.css'

interface Props {
    val?: number
}

const Cell: React.FC<Props> = ({ val }) => {

    return (
        <div
        className='cell'
        >
            {val}
        </div>
    )
}

export default Cell
