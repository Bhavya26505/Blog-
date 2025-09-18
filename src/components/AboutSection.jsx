import React from "react";
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
          Daughter of the king, sweet coffee lover, ministry owner.
          <br />
          Discover resources, inspiration, and community made for you.
        </p>
        <Link to="/about">
          <button className="button-primary">Learn More</button>
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
        alt="About Anabelle"
        style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
      />
    </section>
  );
}
