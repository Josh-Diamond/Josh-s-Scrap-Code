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
                    <div className={css({borderRadius: '5px', backgroundColor: '#082B84', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2%'})}>
                        <p className={css({color: 'white'})}>WellDone</p>
                        <div>
                            <img src={DeleteIcon} alt={'Delete Icon'} />
                            <img src={DeleteMenuIcon} alt={'Delete Menu Icon'} className={css({ paddingLeft: '10px'})} />
                        </div>
                    </div>
                    {/* Top Bar End */}
                    
                    {/* Table  */}
                    <table className={css({ width: '100%', border: '1px solid #464646', borderCollapse: 'collapse'})}>
                        <tr className={css({ backgroundColor: '#CEE7FF'})}>
                            <th className={css({ textAlign: 'center'})}>Sensor ID</th>
                            <th className={css({ textAlign: 'center'})}>Date Added</th>
                            <th className={css({ textAlign: 'center'})}>Status</th>
                            <th className={css({ textAlign: 'center'})}>Remove</th>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4716</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>10/14/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>0 1 2 3 4 5 6 7</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>94</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input type='checkbox' /></td>
                        </tr>
                        <tr>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px'})}>4721</td>
                            <td className={css({ textAlign: 'center'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center'})}>94</td>
                            <td className={css({ textAlign: 'center'})}><input type='checkbox' /></td>
                        </tr>
                        </table>
                    {/* Table Ends */}
                </div>
                {/* Org Card End */}
            </div>
        </div>
    )
}
