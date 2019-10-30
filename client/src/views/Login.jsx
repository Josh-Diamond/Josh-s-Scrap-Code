import React from 'react';
import { css, cx } from 'emotion'
import logo from '../static/loginICONS.png'

export default function Login() {
    return (
      <div>
        {/* <Seo data={data} /> */}
        <div
          className={css({
            display: "flex",
            height: "100vh",
            // marginTop: "-40px",
            backgroundColor: "#ffffff",
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
              src={logo}
              alt="WellDone Icons"
              className={css({ width: "90%" })}
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
                <label for="email" className={css({ marginBottom: "5%" })}>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={css({ marginBottom: "5%",border: '1px solid silver', borderRadius: "2px" })}
                />
                <br />
                <label for="password" className={css({ marginBottom: "5%" })}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
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
                  })}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }