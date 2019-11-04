import React from 'react'
import Nav from '../components/Nav'
import { css } from 'emotion'
import DeleteIcon from '../static/Delete.png'
import DeleteMenuIcon from '../static/DeleteMenu.png'

export default function Admin() {
    return (
        <div className={css({ display: 'flex'})}>
            <Nav />
            <div className={css({ margin: '0 5%', width: '100%'})}>
                <h2 className={css({ fontWeight: '400' })}>WellDone Sensors</h2>
                {/* Org Card */}
                <div className={css({ borderRadius: '5px', width: '400px', margin: '0 auto'})}>
                    {/* Top Bar */}
                    <div className={css({ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#082B84', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%'})}>
                        <p className={css({color: 'white'})}>WellDone</p>
                        <div>
                            <img src={DeleteIcon} alt={'Delete Icon'} />
                            <img src={DeleteMenuIcon} alt={'Delete Menu Icon'} className={css({ paddingLeft: '10px'})} />
                        </div>
                    </div>
                    {/* Top Bar End */}
                    
                    {/* Table  */}
                    <table className={css({ width: '100%', borderCollapse: 'collapse'})}>
                        <tr className={css({ backgroundColor: '#CEE7FF'})}>
                            <th className={css({ textAlign: 'center'})}>Sensor ID</th>
                            <th className={css({ textAlign: 'center'})}>Date Added</th>
                            <th className={css({ textAlign: 'center'})}>Status</th>
                            <th className={css({ textAlign: 'center'})}>Remove</th>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4716</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>10/14/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>0 1 2 3 4 5 6 7</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        </table>
                    {/* Table Ends */}

                    {/* Bottom Bar/Buttons */}
                    <div className={css({ border: '1px solid #082B84', borderTop: '1px solid black', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', padding: '2%',display: 'flex', alignItems: 'center', justifyContent: 'space-between'})}>
                        <button className={css({ width: '80px', height: '30px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Add Sensor</button>
                        <div className={css({ display: 'flex', alignItems: 'center', color: '#7E7E7E', })}>
                            <p className={css({ marginRight: '20px', fontSize: '.7rem'})}>1-9 sensors of 19</p>
                            <button className={css({ width: '64px', height: '30px', marginRight: '7px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Previous</button>
                            <button className={css({ width: '64px', height: '30px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '.81rem'})}>Next</button>
                        </div>
                    </div>
                    {/* Bottom Bar/Buttons End */}
                </div>
                {/* Org Card End */}
            </div>
        </div>
    )
}
