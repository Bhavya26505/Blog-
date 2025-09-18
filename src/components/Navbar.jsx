import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Blog", "Uploads", "About", "Contact"];

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
        position: "relative",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "1.8em", fontWeight: "700" }}>
        <Link to="/" style={{ color: "#a3643a", textDecoration: "none" }}>
          MadeNew
        </Link>
      </div>

      {/* Desktop Nav */}
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
        className="desktop-nav"
      >
        {navLinks.map((item) => {
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

      {/* Hamburger Icon (visible on small screens) */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          cursor: "pointer",
          display: "none",
        }}
        className="hamburger"
      >
        <div
          style={{
            width: "25px",
            height: "3px",
            background: "#a3643a",
            margin: "5px 0",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            background: "#a3643a",
            margin: "5px 0",
          }}
        />
        <div
          style={{
            width: "25px",
            height: "3px",
            background: "#a3643a",
            margin: "5px 0",
          }}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: "1em",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#fffaf6",
            border: "1px solid #e6d7c6",
            width: "200px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          className="mobile-nav"
        >
          {navLinks.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={item} style={{ cursor: "pointer" }}>
                <Link
                  to={path}
                  style={{ color: "#a3643a", textDecoration: "none" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* Simple responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .hamburger {
              display: block !important;
            }
          }
        `}
      </style>
    </nav>
  );
}
