import React from 'react'
import { css } from 'emotion'
import DeleteIcon from '../static/Delete.png'
import DeleteMenuIcon from '../static/DeleteMenu.png'

export default function OrgCardTopBar({ title }) {
    return (
        <div className={css({ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#082B84', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%'})}>
                        <p className={css({color: 'white'})}>{title}</p>
                        <div>
                            <img src={DeleteIcon} alt={'Delete Icon'} className={css({ cursor: 'pointer'})} />
                            <img src={DeleteMenuIcon} alt={'Delete Menu Icon'} className={css({ cursor: 'pointer', paddingLeft: '10px'})} />
                        </div>
                    </div>
    )
}
