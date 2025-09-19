import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const navLinks = ["Home", "Blog", "Uploads", "About"];

  function toggleContact() {
    setShowContact((prev) => !prev);
    setMenuOpen(false); // close mobile menu too
  }

  function closeContact() {
    if (showContact) setShowContact(false);
  }

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
        <Link
          to="/"
          style={{ color: "#a3643a", textDecoration: "none" }}
          onClick={closeContact}
        >
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
                onClick={() => {
                  closeContact();
                  setMenuOpen(false);
                }}
              >
                {item}
              </Link>
            </li>
          );
        })}
        {/* Contact button */}
        <li>
          <button
            onClick={toggleContact}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#a3643a",
              fontWeight: 500,
              fontSize: "1em",
              fontFamily: "Playfair Display, serif",
              padding: 0,
            }}
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Contact info popup */}
      {showContact && (
        <div
          style={{
            position: "absolute",
            top: "3.5rem",
            right: "1rem",
            background: "#f8ece3",
            border: "1px solid #a3643a",
            padding: "1em 1.5em",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
            width: "220px",
          }}
        >
          <p>
            <strong>Name:</strong> Rahi Patel
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:rahi@example.com">rahi@example.com</a>
          </p>
          <p>
            <strong>Pinterest:</strong>{" "}
            <a
              href="https://pinterest.com/rahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rahi_pinterest
            </a>
          </p>
          <p>
            <strong>X:</strong>{" "}
            <a
              href="https://x.com/rahi1108?s=11"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rahi_X
            </a>
          </p>
          <button
            onClick={toggleContact}
            style={{
              marginTop: "1em",
              backgroundColor: "#a3643a",
              color: "#fff",
              border: "none",
              padding: "0.4em 0.8em",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

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
                  onClick={() => {
                    closeContact();
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          {/* Contact button */}
          <li>
            <button
              onClick={() => {
                toggleContact();
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#a3643a",
                fontWeight: 500,
                fontSize: "1em",
                fontFamily: "Playfair Display, serif",
                padding: 0,
              }}
            >
              Contact
            </button>
          </li>
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
