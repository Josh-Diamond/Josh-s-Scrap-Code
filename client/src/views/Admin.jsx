import React from 'react'
import Nav from '../components/Nav'
import { css } from 'emotion'
import OrgCard from '../components/OrgCard'

export default function Admin() {
    return (
        <div className={css({ display: 'flex'})}>
            <Nav />
            <div className={css({ margin: '0 5%', width: '100%', display: 'flex', alignItems: 'flex-start'})}>
                <h2 className={css({ fontWeight: '400' })}>WellDone Sensors</h2>
                <OrgCard />
            </div>
        </div>
    )
}
