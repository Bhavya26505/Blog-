import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ maxWidth: 400, margin: "3em auto", padding: "2em" }}>
      <h2>Admin Dashboard</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li>
          <Link to="/admin-add-blog">Add Blog</Link>
        </li>
        <li>
          <Link to="/admin-add-upload">Add Upload</Link>
        </li>
      </ul>
    </div>
  );
}
