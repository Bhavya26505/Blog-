import React from "react";
export default function About() {
  return (
    <main
      style={{
        background: "#fcf7f2",
        minHeight: "100vh",
        paddingBottom: "2em",
      }}
    >
      {/* Hero Section title bar */}
      <section
        style={{
          background: "#f8ece3",
          padding: "2.5em 0 1.2em 0",
          borderBottom: "1px solid #e6d7c6",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "2.4em",
            color: "#a3643a",
            margin: "0 0 0.5em 0",
          }}
        >
          About Me
        </h1>
      </section>

      {/* Greetings & Intro */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(220, 180, 140, 0.05)",
          padding: "2em",
          marginTop: "-3em",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            color: "#a3643a",
            fontSize: "1.7em",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "0.6em",
          }}
        >
          I’m so glad you’re here!
        </h2>
        <p
          style={{
            marginBottom: "1.15em",
            lineHeight: "1.65",
            color: "#543927",
            fontSize: "1.15em",
          }}
        >
          Hello beautiful angels! My name is Debbie and I love love love being a
          woman and feeling my{" "}
          <b style={{ color: "#a3643a" }}>feminine energy</b>!<br />
          If you enjoy the same things, you’re in the right place!
        </p>
        <p
          style={{
            marginBottom: "1.15em",
            lineHeight: "1.65",
            color: "#543927",
            fontSize: "1.15em",
          }}
        >
          My passion in life is to explore and share beauty secrets with other
          beautiful women, embracing our inner goddesses and radiating
          confidence. I share <b style={{ color: "#a3643a" }}>beauty tips</b>,{" "}
          <b style={{ color: "#a3643a" }}>wellness guidance</b>, and{" "}
          <b style={{ color: "#a3643a" }}>spiritual insights</b> to help you
          transform from the inside out and live with grace and power.
        </p>
      </section>

      {/* Grid with images and sections */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2.2em",
          alignItems: "start",
          maxWidth: "1000px",
          margin: "2em auto 0 auto",
        }}
      >
        {/* Left Column: More detail & images */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Detail"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "1.6em",
              boxShadow: "0 2px 14px rgba(163, 100, 58, 0.08)",
            }}
          />
          <p
            style={{
              lineHeight: "1.65",
              color: "#543927",
              fontSize: "1.1em",
              marginBottom: "1.1em",
            }}
          >
            Life gets busy, but every woman deserves to feel beautiful and
            empowered. I share practical tips so you can slay your goals while
            taking care of yourself daily.
          </p>
          <p
            style={{ lineHeight: "1.65", color: "#543927", fontSize: "1.1em" }}
          >
            Self discovery is a journey ~ let's grow stronger, more confident,
            and more in tune with our true selves together!
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.3em",
              marginTop: "2em",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
              alt="Lifestyle"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 14px rgba(163, 100, 58, 0.08)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
              alt="Self-Care"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 2px 14px rgba(163, 100, 58, 0.08)",
              }}
            />
          </div>
        </div>
        {/* Right Column: Bio & Social */}
        <aside
          style={{
            background: "#f8ece3",
            borderRadius: "10px",
            padding: "2em 1.2em",
            boxShadow: "0 6px 18px rgba(220, 180, 140, 0.08)",
          }}
        >
          <h2
            style={{
              color: "#a3643a",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1.3em",
              marginBottom: "0.6em",
            }}
          >
            Hi There, I am Debbie!
          </h2>
          <p
            style={{
              color: "#543927",
              marginBottom: "1.2em",
              fontSize: "1.09em",
            }}
          >
            I help you unlock your feminine energy and live your best life with
            confidence and purpose. Slay every aspect of your life!
          </p>
          {/* Social links example */}
          <div style={{ display: "flex", gap: "1.2em", marginBottom: "1.4em" }}>
            <a
              href="https://pinterest.com"
              style={{ color: "#a3643a", fontSize: "1.23em" }}
            >
              Pinterest
            </a>
            <a
              href="https://www.instagram.com/rahiiii_11/"
              style={{ color: "#a3643a", fontSize: "1.23em" }}
            >
              Instagram
            </a>
          </div>
          <button
            className="button-primary"
            style={{ width: "100%", marginBottom: "1.3em" }}
          >
            Learn more about me
          </button>
          {/* Latest self-care list */}
          <h3
            style={{
              color: "#a3643a",
              fontFamily: "'Playfair Display', serif",
              borderBottom: "2px solid #a3643a",
              paddingBottom: "0.15em",
              marginBottom: "0.8em",
              fontSize: "1.13em",
            }}
          >
            Latest in{" "}
            <span style={{ color: "#a3643a", fontStyle: "italic" }}>
              Self-Care
            </span>
          </h3>
          <ul
            style={{
              paddingLeft: 0,
              listStyle: "none",
              color: "#543927",
              fontSize: "1em",
              lineHeight: "1.6",
            }}
          >
            <li>How I Made My University Life Magical</li>
            <li>The Ultimate Guide to Creating a Self Care Kit for Comfort</li>
            <li>The Ultimate Guide to a Feminine Fitness Routine</li>
            <li>
              55 Magnetic Self Care Affirmations to Unlock Inner Confidence
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
