/*import React from "react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Later: Add actual submit logic or API call
    alert("Message sent!");
    setForm({ first: "", last: "", email: "", message: "" });
  }

  return (
    <main style={{ background: "#fcf7f2", minHeight: "100vh" }}>
      {/* Section Header }
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
          Contact
        </h1>
      </section>

      {/* Form Section }
      <section
        style={{
          padding: "2.2em 0",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#a3643a",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "1.7em",
            fontWeight: 600,
            fontSize: "1.5em",
            textAlign: "left",
          }}
        >
          Let’s connect! I can’t wait to hear from you!
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(163,100,58,0.07)",
            padding: "2em 2em 1.5em 2em",
          }}
        >
          <label style={{ fontWeight: 600, color: "#a3643a" }}>
            Name <span style={{ color: "#a3643a" }}>*</span>
            <div
              style={{
                display: "flex",
                gap: "1em",
                marginTop: "0.6em",
                marginBottom: "1.2em",
              }}
            >
              <div style={{ flex: 1 }}>
                <input
                  style={inputStyle}
                  type="text"
                  name="first"
                  placeholder="First"
                  value={form.first}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <input
                  style={inputStyle}
                  type="text"
                  name="last"
                  placeholder="Last"
                  value={form.last}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </label>

          <label
            style={{
              fontWeight: 600,
              color: "#a3643a",
              display: "block",
              marginBottom: "1em",
            }}
          >
            Email <span style={{ color: "#a3643a" }}>*</span>
            <input
              style={{ ...inputStyle, marginTop: "0.7em" }}
              type="email"
              name="email"
              placeholder=""
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label
            style={{
              fontWeight: 600,
              color: "#a3643a",
              display: "block",
              marginBottom: "1em",
            }}
          >
            Comment or Message
            <textarea
              style={{
                ...inputStyle,
                minHeight: "90px",
                marginTop: "0.7em",
                resize: "vertical",
              }}
              name="message"
              placeholder=""
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="button-primary"
            style={{
              marginTop: "1.5em",
              width: "120px",
              fontWeight: 700,
              boxShadow: "0 2px 13px rgba(163, 100, 58, 0.11)",
            }}
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.7em",
  border: "1px solid #e6d7c6",
  borderRadius: "6px",
  fontSize: "1.05em",
  fontFamily: "'Nunito Sans', Arial, sans-serif",
  color: "#543927",
  outline: "none",
  background: "#fcf7f2",
  marginBottom: "0.2em",
  boxSizing: "border-box",
};*/
