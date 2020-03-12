import React, { useState, useEffect } from 'react';
import { css } from 'emotion'
import logo from '../static/loginICONS.png'
import logoONE from '../static/loginONE.png'
import logoTWO from '../static/loginTWO.png'
import logoTHREE from '../static/loginTHREE.png'
import axios from 'axios'

export default function Login({ history }) {
  const [creds, setCreds] = useState({})
  const [image, setImage] = useState(0)
  const ImgArr = [logoONE, logoTWO, logoTHREE]
  const randomImage = () => {
    let num = Math.floor(Math.random() * ImgArr.length)
    setImage(num)
  }

  useEffect(() => {
    randomImage()
  }, [])

  const changeHandler = e => {
    setCreds({...creds,
    [e.target.name]: e.target.value
    })
    console.log('creds', creds)
  }

  const login = e => {
    e.preventDefault();
    // axios
    //     .post('https://welldone-db.herokuapp.com/api/auth/login', creds)
    //     .then(res => {
    //         console.log('response =>',res)
    //         localStorage.setItem('token', res.data.token)
    //         localStorage.setItem('account_id', res.data.id)
    //         history.push('/home')
    //     })
    //     .catch(err => console.log(err))
    localStorage.setItem('token', 'token_for_portfolio_access')
    history.push('/home')
    }

    return (
      <div>
        {/* <Seo data={data} /> */}
        <div
          className={css({
            display: "flex",
            height: "100vh",
            // marginTop: "-40px",
            // backgroundImage: `url(${logoTHREE})`,
            // backgroundSize: 'cover',
          })}>
          <div
            className={css({
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid #082B84",
              "@media (max-width: 800px)": {
                display: 'none',
              },
            })}>
            <img
              // src={ImgArr[image]}
              src={logo}
              alt="WellDone Icons"
              className={css({ width: '90%'})}
            />
          </div>
          <div
            className={css({
              width: "40%",
              backgroundColor: "#F3F7FC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 800px)": {
                width: '100%',
              },
            })}>
            <div
              className={css({
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              })}>
              <h4
                className={css({
                  alignSelf: "flex-start",
                  marginTop: "0px",
                  fontSize: "2.5rem",
                  fontWeight: "500",
                })}>
                Sign In
              </h4>
              <form
                className={css({ display: "flex", flexDirection: "column", width: "100%" })}>
                <label htmlFor="email" className={css({ marginBottom: "5%" })}>
                  Email
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email"
                  onChange={changeHandler}
                  className={css({ marginBottom: "5%",border: '1px solid silver', borderRadius: "2px" })}
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
                  className={css({ marginBottom: "5%", border: '1px solid silver', borderRadius: "2px" })}
                />
                <br />
                <button
                  className={css({
                    height: "30px",
                    backgroundColor: "#027EF3",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer"
                  })} onClick={login} >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }