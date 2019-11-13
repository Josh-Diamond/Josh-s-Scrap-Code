import React, { useState } from 'react'
import Nav from '../components/Nav'
import { css } from 'emotion'
import OrgCard from '../components/OrgCard'
import OrgModal from '../components/OrgModal'

export default function Admin() {
    const [orgModal, setOrgModal] = useState(false)

    const toggleModal = () => {
        setOrgModal(!orgModal)
    }
    return (
        <div className={css({ display: 'flex'})}>
            <Nav fixed />
            <div className={css({ width: '100%', marginLeft: '240px' })}>
                {/* top part */}
            <div className={css({  width: '100%', display: 'flex', alignItems: 'flex-start'})}>
                <h2 className={css({ margin: '2% 5%', fontWeight: '400' })}>WellDone Sensors</h2>
                <div className={css({ margin: '2% 15%'})}>
                <OrgCard title={'WellDone'} />
                </div>
            </div>
                {/* end top part */}
                {/* Middle Line */}
            <div className={css({ borderBottom: '1px solid #082B84', width: '100%'})}/>
                {/* Middle Line End */}
        
                {/* Bottom Part */}
                <div className={css({ backgroundColor: '#F3F7FC'})}>
                <div>
                    <div className={css({ width: '100%', display: 'flex', alignItems: 'center'})}>
                    <h2 className={css({ margin: '2% 5%', fontWeight: '400' })}>Organizations</h2>
                    <button className={css({ margin: '25px 100px', cursor: 'pointer', border: 'none', width: '210px', height: '42px', backgroundColor: '#027EF3', color: 'white', fontSize: '1rem' })} onClick={toggleModal} >Create New Organization</button>
                </div>
                {/* Map Org Links */}
                <div className={css({ display: 'flex', flexWrap: 'wrap', margin: '2% 5.25%'})}>
                    <a href='#' className={css({ marginRight: '1%', color: '#0282FA', cursor: 'pointer', textDecoration: 'none'})}>SavingWater</a>
                    <a href='#' className={css({ marginRight: '1%', color: '#0282FA', cursor: 'pointer', textDecoration: 'none'})}>WaterForgotten</a>
                    <a href='#' className={css({ marginRight: '1%', color: '#0282FA', cursor: 'pointer', textDecoration: 'none'})}>WellWishes</a>
                </div>
                {/* End Map Org Links */}

                {/* Map Org Cards */}
                <div className={css({ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '3%'})}>
                    <OrgCard title={'SavingWater'} />
                    <OrgCard title={'WaterForgotten'} />
                    <OrgCard title={'WellWishes'} />
                    <OrgCard title={`Josh's Test`} />
                </div>
                {/* End Map Org Cards */}
            </div>
                {/* End Bottom Part */}
                </div>
                {orgModal ? <OrgModal setOrgModal={setOrgModal} /> : null}
            </div>
        </div>
    )
}
