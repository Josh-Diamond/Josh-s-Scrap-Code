import React from 'react'
import { css } from 'emotion'

export default function StatusCard({ status }) {
    return (
            <div className={status.status === 0 ? css({ backgroundColor: '#f44336', borderRadius: '5px', height: '16px', width: '6px'}) : status.status === 1 ? css({ backgroundColor: '#FFAD34', borderRadius: '5px', height: '16px', width: '6px'}) : status.status === 2 ? css({ backgroundColor: '#01c000', borderRadius: '5px', height: '16px', width: '6px'}) : null} />
    )
}
