import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1em 1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Playfair Display, serif",
        color: "#a3643a",
        borderBottom: "1px solid #e6d7c6",
      }}
    >
      <div style={{ fontSize: "1.8em", fontWeight: "700" }}>
        <Link to="/" style={{ color: "#a3643a", textDecoration: "none" }}>
          MadeNew
        </Link>
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          gap: "1.8em",
          fontWeight: "500",
          fontSize: "1em",
          margin: 0,
        }}
      >
        {["Home", "Blog","Uploads", "About", "Contact"].map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <li key={item} style={{ cursor: "pointer" }}>
              <Link
                to={path}
                style={{ color: "#a3643a", textDecoration: "none" }}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
