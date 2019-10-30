import React from 'react'
import { css } from 'emotion'
import WellDonelogo from '../static/WellDoneLogo.png'

export default function NavLogo() {
    return (
            <div className={css({ width: 240, display: 'flex', height: '146px', borderBottom: '1px solid #CED5E6', alignItems: 'center', justifyContent: 'center' })}>
                <img src={WellDonelogo} alt='WellDone International Logo' />
            </div>
    )
}
