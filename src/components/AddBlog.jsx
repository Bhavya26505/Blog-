import React, { useState } from "react";
import { supabase } from "../lib/supabase";

const categories = [
  "student life",
  "college",
  "study",
  "love",
  "sports",
  // add more categories if needed
];

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !content || !imageFile || !category) {
      alert("Please complete all fields");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Supabase Storage
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, imageFile);

      if (uploadError) {
        alert("Image upload failed: " + uploadError.message);
        setLoading(false);
        return;
      }

      // Get public URL of uploaded image
      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-images").getPublicUrl(fileName);

      // Insert blog post data into database including category
      const { error: insertError } = await supabase.from("blogs").insert([
        {
          title: title,
          content: content,
          category: category,
          image_url: publicUrl,
        },
      ]);

      if (insertError) {
        alert("Failed to add blog post: " + insertError.message);
        setLoading(false);
        return;
      }

      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setImageFile(null);
      setCategory(categories[0]);
    } catch (error) {
      alert("Error: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2em auto", padding: "2em" }}>
      <h2 style={{ color: "#a3643a", fontFamily: "Playfair Display, serif" }}>
        Add New Blog Post
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Blog Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "0.7em",
              border: "1px solid #e6d7c6",
              borderRadius: "6px",
              fontSize: "1em",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Content/Summary:
          </label>
          <textarea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: "100%",
              padding: "0.7em",
              border: "1px solid #e6d7c6",
              borderRadius: "6px",
              fontSize: "1em",
              resize: "vertical",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "0.7em",
              border: "1px solid #e6d7c6",
              borderRadius: "6px",
              fontSize: "1em",
              cursor: "pointer",
            }}
            required
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "1.5em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Upload Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            style={{ marginBottom: "0.5em" }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="button-primary"
          style={{ width: "100%" }}
        >
          {loading ? "Adding Blog..." : "Add Blog Post"}
        </button>
      </form>
    </div>
  );
}
