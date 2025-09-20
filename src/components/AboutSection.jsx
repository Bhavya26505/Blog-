import React from "react";
import rahiImg from './rahi.jpg';
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="two-col-section">
      <div
        style={{
          background: "#f8ece3",
          borderRadius: "12px",
          padding: "2em",
        }}
      >
        <h2>Hi, I'm Rahi.</h2>
        <p>
          I believe life is a blend of lectures, lessons, and little moments
          that change us and this is where I write about them.
          <br />
          
        </p>
        <Link to="/about">
          <button className="button-primary">Learn More</button>
        </Link>
      </div>
      <img
        src={rahiImg}
        alt="About Rahi"
        style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
      />
    </section>
  );
}
