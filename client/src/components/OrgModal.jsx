import React, { useState } from 'react'
import { css } from 'emotion'

export default function OrgModal({ setOrgModal }) {
    const [form, setForm] = useState({})
    const close = () => {
        setOrgModal(false)
    }
    const changeHandler = e => {
        setForm({...form,
        [e.target.name]: e.target.value
        })
        console.log('form', form)
      }
    return (
        <div className={css({ position: 'fixed', zIndex: 7, color: 'darkred', width: '100%', height: '100%', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', backgroundColor: 'rgba(0,0,0, 0.5)'})}>
            <div className={css({ padding: '0 20px 0 20px', borderRadius: '5px', height: '320px', position: 'absolute', left: '36%', right: '36%', top: '38%', bottom: '38%', margin: 'auto', backgroundColor: '#F3F7FC' })}>
                <button className={css({ float: 'right', fontWeight: 'bold', borderRadius: '50%', cursor: 'pointer', height: '25px', width: '25px', textAlign: 'center', marginTop: '15px', color: '#8E1818', border: '2px solid #8E1818', backgroundColor: '#F3F7FC' })} onClick={close}>x</button>
                <div>
                    <h2 className={css({ color: 'black'})}>Create Organization</h2>
                    <form className={css({ color: 'black'})}>
                    <div className={css({ display: "flex", flexDirection: "row", justifyContent: 'space-between'})}>
                    <div className={css({ display: "flex", flexDirection: "column"})}>
                        <label htmlFor="org_name" className={css({ marginBottom: "5%" })}>
                        Organization Name
                        </label>
                        <input
                        type="text"
                        name="org_name"
                        id="org_name"
                        onChange={changeHandler}
                        className={css({ marginBottom: "5%", width: '200px', height: '32px', border: '1px solid silver', borderRadius: "2px" })}
                        />
                        <br />
                        <label htmlFor="password" className={css({ marginBottom: "5%" })}>
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={changeHandler}
                        className={css({ marginBottom: "5%", height: '32px', width: '200px', border: '1px solid silver', borderRadius: "2px" })}
                        />
                        <br />

                    </div>
                    <div className={css({ display: "flex", flexDirection: "column"})}>
                        <label htmlFor="email" className={css({ marginBottom: "5%" })}>
                        E-Mail
                        </label>
                        <input
                        type="text"
                        name="email_address"
                        id="email"
                        onChange={changeHandler}
                        className={css({ marginBottom: "5%", height: '32px', width: '200px', border: '1px solid silver', borderRadius: "2px" })}
                        />
                        <br />
                        <label htmlFor="confirmPassword" className={css({ marginBottom: "5%" })}>
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={changeHandler}
                        className={css({ marginBottom: "5%", height: '32px', width: '200px', border: '1px solid silver', borderRadius: "2px" })}
                        />
                        <br />

                    </div>
                    </div>
                    <button className={css({ width: '135px', height: '32px', backgroundColor: '#027EF3', border: 'none', color: 'white', fontSize: '1rem', marginLeft: '72.5%'})}>Create Account</button>
                
              </form>
                </div>
            </div>
        </div>
    )
}
