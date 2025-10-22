import React from "react";
import { Link } from "react-router-dom";
import rahiImg from './rahi_3.jpg';

export default function HeroSection() {
  return (
    <section className="two-col-section">
      <img
        src={rahiImg}
        alt="Rahi"
        style={{ width: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
      <div>
        <h1>Welcome to Souled Whispers!</h1>
        <p>
          A space where I share my journey of growth, self-discovery, and the
          beautiful balance between academics, creativity, and personal life.
          Through stories, reflections, and little captured moments, I hope to
          inspire you to embrace your own path and find meaning in every
          step of the journey.
        </p>
        <Link to="/blog">
          <button className="button-primary">Get Started</button>
        </Link>
      </div>
    </section>
  );
}
