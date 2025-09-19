import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8ece3",
        padding: "2em 1em",
        marginTop: "3em",
        textAlign: "center",
        color: "#543927",
        fontFamily: "Nunito Sans, Arial, sans-serif",
        fontSize: "0.9em",
      }}
    >
      <div style={{ marginBottom: "1em" }}>
        {/* <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{
            color: "#a3643a",
            margin: "0 0.8em",
            fontSize: "1.4em",
            textDecoration: "none",
          }}
        >
          <FaInstagram />
        </a> */}
        <a
          href="https://x.com/rahi1108?s=11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          style={{
            color: "#a3643a",
            margin: "0 0.8em",
            fontSize: "1.4em",
            textDecoration: "none",
          }}
        >
          <FaX />
        </a>
      </div>
      <p>
       <b> © {new Date().getFullYear()}
        All rights reserved.</b>{" "}
      </p>
    </footer>
  );
}
