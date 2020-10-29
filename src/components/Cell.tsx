import React, { useState } from 'react'

interface Props {
    val?: number
}

const Cell: React.FC<Props> = ({ val }) => {

    return (
        <div>
            Cell: {val}
        </div>
    )
}

export default Cell
