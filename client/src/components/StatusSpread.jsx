import React from 'react'
import { css } from 'emotion'
import StatusCard from './StatusCard'

const statusData = [
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 2
    },
    {
        status: 2
    },
    {
        status: 1
    },
    {
        status: 0
    },
    {
        status: 2
    },
]

export default function StatusSpread() {
    return (
        <div className={css({ display: 'flex', justifyContent: 'space-evenly',})}>
            {statusData.map(status => <StatusCard status={status} />)}
        </div>
    )
}
