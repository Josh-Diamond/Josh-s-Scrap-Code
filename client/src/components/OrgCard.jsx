import React from 'react'
import { css } from 'emotion'
import OrgCardTopBar from './OrgCardTopBar'
import OrgCardTable from './OrgCardTable'
import OrgCardBottomBar from './OrgCardBottomBar'

export default function OrgCard() {
    return (
        <div className={css({ borderRadius: '5px', width: '400px', margin: '25px auto'})}>
                    <OrgCardTopBar />
                    <OrgCardTable />
                    <OrgCardBottomBar />
                </div>
    )
}
