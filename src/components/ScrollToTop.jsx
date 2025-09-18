import React from "react";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        padding: "0.7em 1.2em",
        fontSize: "1.2em",
        backgroundColor: "#a3643a",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
        zIndex: 1000,
        transition: "background-color 0.3s ease",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}
