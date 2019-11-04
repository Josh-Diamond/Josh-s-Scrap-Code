import React from 'react'
import { css } from 'emotion'

export default function OrgCardBottomBar() {
    return (
        <div className={css({ border: '1px solid #082B84', borderTop: '1px solid black', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', padding: '2%',display: 'flex', alignItems: 'center', justifyContent: 'space-between'})}>
                        <button className={css({ cursor: 'pointer', width: '80px', height: '30px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Add Sensor</button>
                        <div className={css({ display: 'flex', alignItems: 'center', color: '#7E7E7E', })}>
                            <p className={css({ marginRight: '20px', fontSize: '.7rem'})}>1-9 sensors of 19</p>
                            <button className={css({ cursor: 'pointer', width: '64px', height: '30px', marginRight: '7px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Previous</button>
                            <button className={css({ cursor: 'pointer', width: '64px', height: '30px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Next</button>
                        </div>
                    </div>
    )
}
