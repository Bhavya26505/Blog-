import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="two-col-section">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Hero"
        style={{ width: "100%", borderRadius: "14px", objectFit: "cover" }}
      />
      <div>
        <h1>Welcome to MadeNew!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover
          beautiful templates and heartfelt stories.
        </p>
        <Link to="/blog">
          <button className="button-primary">Get Started</button>
        </Link>
      </div>
    </section>
  );
}
