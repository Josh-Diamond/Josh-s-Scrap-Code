import React, { useState } from "react"
// import {
//   AreaChart,
//   Area,
//   Tooltip,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Label,
// } from "recharts"
import { getPumpStyles, breakingPoints } from "./Styles"
import { css } from "emotion"

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
export default function ModalCard({ pump, error, setModalId }) {
  const pumpStyles = getPumpStyles({ iconSize: 25 })
  const [graphData] = useState(() => {
    if (pump.statuses) {
      return Object.keys(pump.statuses).map(date => {
        return {
          name: date,
          total: Math.floor(pump.statuses[date].total),
        }
      })
    }
  })
  console.log(pump)
  return (
    <div
      className={css({
        // padding: "20px 30px",
        backgroundColor: "white",
        border: "1px solid #DDE1E5",
        // zIndex: '99999999999999999999999',
        // overflow: "hidden",
        // width: "100%",
        width: '300px',
        height: '150px',
        borderRadius: 10,
        margin: "10px 1%",
        // [breakingPoints.lg]: {
        //   width: "48%",
        // },
        [breakingPoints.sm]: {
          width: "100%",
        },
      })}>
      <p>Modal Here</p>
      <p onClick={()=> setModalId(null)}>x</p>
    </div>
  )
}
