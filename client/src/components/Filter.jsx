import React, { useState } from 'react'
import { css } from 'emotion'
import { getPumpStyles } from "../components/Styles"

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16)
  
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")"
    }
  }

export default function Filter() {
    const pumpStyles = getPumpStyles({ iconSize: 15 })
    const [expanded, setExpanded] = useState(false)
    const [funcToggle, setFuncToggle] = useState(false)
    const [unToggle, setUnToggle] = useState(false)
    const [nonToggle, setNonToggle] = useState(false)
    
    const isExpanded = () => {
        setExpanded(!expanded)
      }

    return (
        <details
        className={css({
          width: "250px",
          backgroundColor: "#082B84",
          borderRadius: "6px",
          zIndex: "9999999999999",
        })}>

        {/* Summary */}
        <summary
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            outline: "none",
            cursor: "pointer",
            margin: "0 5%",
            "::-webkit-details-marker": {
              display: "none",
            },
          })}
          onClick={isExpanded}>
          <p className={css({ color: "white", fontWeight: "100" })}>Filter</p>
          {expanded ? (
            <p
              className={css({
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
                margin: "0",
              })}>
              -
            </p>
          ) : (
            <p
              className={css({
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
                margin: "0",
              })}>
              +
            </p>
          )}
        </summary>
        {/* End Summary */}

        {/* Details */}
        <div
          className={css({
            backgroundColor: "white",
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
            cursor: "auto",
          })}>
          <form
            className={css({ display: "flex", flexDirection: "column", width: "100%" })}>
            <label
              for="country"
              className={css({ marginBottom: "5%", fontWeight: "bold", margin: "5%" })}>
              Country
            </label>
            <select
              name="country"
              id="country"
              className={css({ margin: "0 5%", width: "80%", margin: "0 auto" })}>
              <option value="Cambodia">Cambodia</option>
              <option value="Uganda">Uganda</option>
            </select>

            <label
              for="status"
              className={css({ marginBottom: "5%", fontWeight: "bold", margin: "5%" })}>
              Status
            </label>

            {/* Functional */}
            <div
              className={css({
                margin: "0 5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "85%",
              })}>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <div
                  className={css({
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor: hexToRGB(
                      pumpStyles.status[2].color,
                      0.2,
                    ),
                  })}>
                  {pumpStyles.status[2].icon}
                </div>
                <p>Functional</p>
              </div>
              <div
                className={css({
                  background: "#D7D7D7",
                  borderRadius: "50px",
                  height: "20px",
                  position: "relative",
                  width: "40px",
                })}>
                <div
                  onClick={() => setFuncToggle(!funcToggle)}
                  className={
                    funcToggle
                      ? css({
                          background: "#01c000",
                          borderRadius: "50px",
                          height: "18px",
                          left: "18px",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                      : css({
                          background: "#f44336",
                          borderRadius: "50px",
                          height: "18px",
                          left: "0",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                  }
                />
              </div>
            </div>

            {/* Unknown */}
            <div
              className={css({
                margin: "0 5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "85%",
              })}>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <div
                  className={css({
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor: hexToRGB(
                      pumpStyles.status[1].color,
                      0.2,
                    ),
                  })}>
                  {pumpStyles.status[1].icon}
                </div>
                <p>Unknown</p>
              </div>
              <div
                className={css({
                  background: "#D7D7D7",
                  borderRadius: "50px",
                  height: "20px",
                  position: "relative",
                  width: "40px",
                })}>
                <div
                  onClick={() => setUnToggle(!unToggle)}
                  className={
                    unToggle
                      ? css({
                          background: "#01c000",
                          borderRadius: "50px",
                          height: "18px",
                          left: "18px",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                      : css({
                          background: "#f44336",
                          borderRadius: "50px",
                          height: "18px",
                          left: "0",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                  }
                />
              </div>
            </div>

            {/* Non-Functional */}
            <div
              className={css({
                margin: "0 5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "85%",
              })}>
              <div className={css({ display: "flex", alignItems: "center" })}>
                <div
                  className={css({
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    backgroundColor: hexToRGB(
                      pumpStyles.status[0].color,
                      0.2,
                    ),
                  })}>
                  {pumpStyles.status[0].icon}
                </div>
                <p>Non-Functional</p>
              </div>
              <div
                className={css({
                  background: "#D7D7D7",
                  borderRadius: "50px",
                  height: "20px",
                  position: "relative",
                  width: "40px",
                })}>
                <div
                  onClick={() => setNonToggle(!nonToggle)}
                  className={
                    nonToggle
                      ? css({
                          background: "#01c000",
                          borderRadius: "50px",
                          height: "18px",
                          left: "18px",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                      : css({
                          background: "#f44336",
                          borderRadius: "50px",
                          height: "18px",
                          left: "0",
                          position: "absolute",
                          transition: "0.2s",
                          width: "20px",
                          cursor: "pointer",
                        })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </details>
    //   End Details
    )
}


