import React from 'react'
import Nav from '../components/Nav'
import { css } from 'emotion'
import OrgCard from '../components/OrgCard'

export default function Admin() {
    return (
        <div className={css({ display: 'flex'})}>
            <Nav />
            <div className={css({ width: '100%' })}>
                {/* top part */}
            <div className={css({  width: '100%', display: 'flex', alignItems: 'flex-start'})}>
                <h2 className={css({ margin: '2% 5%', fontWeight: '400' })}>WellDone Sensors</h2>
                <OrgCard />
            </div>
                {/* end top part */}
                {/* Middle Line */}
            <div className={css({ borderBottom: '1px solid #082B84', width: '100%'})}/>
                {/* Middle Line End */}

                {/* Bottom Part */}
                <div className={css({ width: '100%', display: 'flex', alignItems: 'center'})}>
                <h2 className={css({ margin: '2% 5%', fontWeight: '400' })}>Organizations</h2>
                <button className={css({ margin: '25px 100px', cursor: 'pointer', border: 'none', width: '210px', height: '42px', backgroundColor: '#027EF3', color: 'white', fontSize: '1rem' })}>Create New Organization</button>
            </div>
                {/* End Bottom Part */}
            </div>
        </div>
    )
}
