import React from 'react'
import Nav from '../components/Nav'
import { css } from 'emotion'

export default function Settings() {
    return (
        <div className={css({ display: 'flex'})}>
            <Nav />
            <div className={css({ marginLeft: '7%'})}>
                <h2>Settings Page</h2>
                <h4>(Coming Soon...)</h4>
            </div>
        </div>
    )
}
