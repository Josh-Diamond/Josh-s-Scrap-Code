import React from 'react'
import { css } from 'emotion'

export default function OrgModal({ setOrgModal }) {
    const close = () => {
        setOrgModal(false)
    }
    return (
        <div className={css({ position: 'fixed', zIndex: 7, color: 'darkred', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', backgroundColor: 'rgba(0,0,0, 0.5)'})}>
            <div className={css({ padding: '0 20px 0 20px', position: 'absolute', left: '36%', right: '36%', top: '38%', bottom: '38%', margin: 'auto', backgroundColor: '#F3F7FC' })}>
                <button className={css({ float: 'right', borderRadius: '50%', cursor: 'pointer', height: '25px', width: '25px', textAlign: 'center', marginTop: '15px', color: '#8E1818', border: '2px solid #8E1818', backgroundColor: '#F3F7FC' })} onClick={close}>x</button>
                <div>
                    <h2 className={css({ color: 'black'})}>Create Organization</h2>
                </div>
            </div>
        </div>
    )
}
