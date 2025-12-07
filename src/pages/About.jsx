import React from "react";
import rahiImage from "./rahi_2.jpg";
import rahiImage2 from "./rahi_4.jpg";
import rahiImage3 from "./rahi_5.jpg"; 
export default function About() {
  return (
    <main
      style={{
        background: "#fcf7f2",
        minHeight: "100vh",
        paddingBottom: "2em",
        paddingTop: "5em", // Add space for fixed/tall navbar
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
          margin: "2em auto 0 auto", // No negative margin now!
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(220, 180, 140, 0.05)",
          padding: "2em",
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
          Hello Hello!! I’m Rahi!
        </h2>
        <p
          style={{
            marginBottom: "1.15em",
            lineHeight: "1.65",
            color: "#543927",
            fontSize: "1.15em",
          }}
        >
          I’m currently a student at University of Toronto studying Molecular
          Biology with a minor in Chemistry. While I love diving into the
          fascinating world of science, my passions extend far beyond the lab.
          Writing is my way of making sense of life, of exploring my thoughts
          and emotions, and of connecting with others who may be walking a
          similar path. Painting allows me to express what words sometimes
          cannot, and you’ll almost always find a camera in my hand, capturing
          the little details and fleeting moments that make life extraordinary.
        </p>
        <p
          style={{
            marginBottom: "1.15em",
            lineHeight: "1.65",
            color: "#543927",
            fontSize: "1.15em",
          }}
        >
          This blog is my little corner of the internet where I share the
          journey I’m on a journey of growth, self-discovery, and learning how
          to balance everything life throws at me. Between classes, assignments,
          and responsibilities, I try to carve out time to reflect, create, and
          simply be present. I write about my academic experiences, the things I
          find fascinating, and the lessons I’m learning along the way. But I
          also explore the spiritual, emotional, and personal aspects of my
          life—the moments that shape me as a person, challenge me to grow, and
          teach me to embrace who I truly am.
        </p>
        <p
          style={{
            marginBottom: "1.15em",
            lineHeight: "1.65",
            color: "#543927",
            fontSize: "1.15em",
          }}
        >
          Life, I’ve realized, isn’t just about achieving goals or checking
          boxes. It’s about noticing the small things: the quiet moments of
          clarity, the lessons hidden in challenges, the joy in discovering
          something new, and the strength that comes from embracing
          vulnerability. Through this blog, I hope to share not only my
          experiences and insights but also encouragement and inspiration for
          anyone navigating their own journey.
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
            src={rahiImage}
            alt="Detail"
            style={{
              width: "100%",
              maxWidth: "600px", // limit max width
              height: "400px", // fixed height to avoid elongation
              borderRadius: "10px",
              marginBottom: "1.6em",
              boxShadow: "0 2px 14px rgba(163, 100, 58, 0.08)",
              objectFit: "cover", // ensure image fills container nicely
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
            Here, you’ll find stories about the balance I strive to create
            between academics, creativity, and personal growth. You’ll find
            reflections on emotional resilience, spiritual awakenings, and the
            little rituals that help me feel grounded in the chaos of everyday
            life. And, sometimes, you’ll just find snapshots of life as I see
            it—moments that spark curiosity, wonder, and inspiration.
          </p>
          <p
            style={{ lineHeight: "1.65", color: "#543927", fontSize: "1.1em" }}
          >
            If you’ve ever felt torn between responsibilities and self-care,
            ambition and reflection, or knowledge and creativity—welcome. This
            space is for anyone who wants to explore, reflect, and grow. My hope
            is that as you read my thoughts and stories, you’ll feel a little
            more connected to yourself and reminded that every step of your
            journey, no matter how messy or uncertain, holds meaning, growth,
            and beauty.
          </p>
          <p
            style={{ lineHeight: "1.65", color: "#543927", fontSize: "1.1em" }}
          >
            So,thank you for stopping by, and I hope you’ll join me as I
            navigate this incredible, unpredictable, and beautiful journey
            called life. Together, let’s celebrate the little victories, reflect
            on the lessons, and embrace the moments that make us who we are.
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
              src={rahiImage2}
              alt="Lifestyle"
              style={{
                width: "350px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 2px 14px rgba(163, 100, 58, 0.08)",
              }}
            />
            <img
              src={rahiImage3}
              alt="Self-Care"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
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
          ></h2>
          <p
            style={{
              color: "#543927",
              marginBottom: "1.2em",
              fontSize: "1.09em",
            }}
          >
            {/* I help you unlock your feminine energy and live your best life with
            confidence and purpose. Slay every aspect of your life! */}
          </p>
          {/* Social links example */}
          <div style={{ display: "flex", gap: "1.2em", marginBottom: "1.4em" }}>
            <a
              href="https://pin.it/7t2Cd7zLw"
              style={{ color: "#a3643a", fontSize: "1.23em" }}
            >
              Pinterest
            </a>
            {/* <a
              href="https://www.instagram.com/rahiiii_11/"
              style={{ color: "#a3643a", fontSize: "1.23em" }}
            >
              Instagram
            </a> */}
          </div>
          {/* <button
            className="button-primary"
            style={{ width: "100%", marginBottom: "1.3em" }}
          >
            Learn more about me
          </button> */}
          {/* Latest self-care list */}
          {/* <h3
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
          </h3> */}
          {/* <ul
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
          </ul> */}
        </aside>
      </section>
    </main>
  );
}
