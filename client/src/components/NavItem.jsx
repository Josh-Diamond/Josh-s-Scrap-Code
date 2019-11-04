import React from "react";
import { css } from "emotion";

export default function NavItem({ title, image, icon }) {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        padding: "10px 25px",
        cursor: "pointer",
        ":hover": { backgroundColor: "#1C49BB" }
      })}
    >
      {image ? (
        <img
          src={image}
          alt={`${title} Icon`}
          className={css({ paddingRight: "15px", width: "25px" })}
        />
      ) : (
        <div
          className={css({
            color: "white",
            fontSize: "1.3rem",
            paddingRight: "10px",
            width: "30px"
          })}
        >
          {icon}
        </div>
      )}
      <a
        href="#"
        className={css({
          textDecoration: "none",
          color: "white",
          fontSize: "1.4rem"
        })}
      >
        {title}
      </a>
    </div>
  );
}
