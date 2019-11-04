import React from 'react'
import { css } from 'emotion'
import StatusSpread from './StatusSpread'

export default function OrgCardTable() {
    return (
        <table className={css({ width: '100%', borderCollapse: 'collapse'})}>
                        <tr className={css({ backgroundColor: '#CEE7FF'})}>
                            <th className={css({ textAlign: 'center', color: '#464646', fontWeight: '400'})}>Sensor ID</th>
                            <th className={css({ textAlign: 'center', color: '#464646', fontWeight: '400'})}>Date Added</th>
                            <th className={css({ textAlign: 'center', color: '#464646', fontWeight: '400'})}>Status</th>
                            <th className={css({ textAlign: 'center', color: 'black', fontWeight: '400'})}>Remove</th>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4716</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>10/14/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        <tr className={css({ borderLeft: '1px solid #082B84', borderRight: '1px solid #082B84'})}>
                            <td className={css({ textAlign: 'left', paddingLeft: '9px', borderBottom: '1px solid #C7C9CF'})}>4721</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}>09/26/2019</td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><StatusSpread /></td>
                            <td className={css({ textAlign: 'center', borderBottom: '1px solid #C7C9CF'})}><input className={css({ cursor: 'pointer'})} type='checkbox' /></td>
                        </tr>
                        </table>
    )
}
