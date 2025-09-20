import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_USERNAME = "rahipateluot"; // Change as needed
const ADMIN_PASSWORD = "rahi@uot211";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setError("");
      onLoginSuccess();
      // Redirect to admin dashboard or add blog page after login
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "3em auto",
        padding: "2em",
        backgroundColor: "#f8ece3",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          color: "#a3643a",
          fontFamily: "Playfair Display, serif",
          marginBottom: "1em",
        }}
      >
        Admin Login
      </h2>

      <form onSubmit={handleSubmit}>
        <label
          style={{ display: "block", marginBottom: "0.5em", color: "#a3643a" }}
        >
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5em",
            marginBottom: "1em",
            borderRadius: "4px",
          }}
        />

        <label
          style={{ display: "block", marginBottom: "0.5em", color: "#a3643a" }}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.5em",
            marginBottom: "1em",
            borderRadius: "4px",
          }}
        />

        {error && (
          <div style={{ color: "red", marginBottom: "1em" }}>{error}</div>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#a3643a",
            color: "white",
            padding: "0.7em",
            border: "none",
            borderRadius: "4px",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
