import React, { useState } from "react";
import { supabase } from "../lib/supabase";

const categories = ["student life", "college", "study", "love", "sports"];

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [imageFile1, setImageFile1] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);
  const [imageFile3, setImageFile3] = useState(null);
  const [category, setCategory] = useState(categories[0]);
  const [loading, setLoading] = useState(false);

  async function uploadToBucket(file) {
    if (!file) return "";
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}.${fileExt}`;
    let { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);
    if (error) throw error;
    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);
    return data.publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !title ||
      !content1 ||
      !imageFile1 ||
      !content2 ||
      !imageFile2 ||
      !content3 ||
      !imageFile3 ||
      !category
    ) {
      alert("Please complete all fields");
      return;
    }
    setLoading(true);

    try {
      const imageUrl1 = await uploadToBucket(imageFile1);
      const imageUrl2 = await uploadToBucket(imageFile2);
      const imageUrl3 = await uploadToBucket(imageFile3);
      const { error: insertError } = await supabase.from("blogs").insert([
        {
          title,
          category,
          content1,
          image_url1: imageUrl1,
          content2,
          image_url2: imageUrl2,
          content3,
          image_url3: imageUrl3,
        },
      ]);
      if (insertError) {
        alert("Failed to add blog post: " + insertError.message);
        setLoading(false);
        return;
      }
      alert("Blog added successfully!");
      setTitle("");
      setContent1("");
      setImageFile1(null);
      setContent2("");
      setImageFile2(null);
      setContent3("");
      setImageFile3(null);
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
        {/* Blog Title */}
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

        {/* First Content Summary and Image */}
        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Content Summary 1:
          </label>
          <textarea
            rows={3}
            value={content1}
            onChange={(e) => setContent1(e.target.value)}
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
            Upload Image 1:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile1(e.target.files[0])}
            style={{ marginBottom: "0.5em" }}
            required
          />
        </div>

        {/* Second Content Summary and Image */}
        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Content Summary 2:
          </label>
          <textarea
            rows={3}
            value={content2}
            onChange={(e) => setContent2(e.target.value)}
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
            Upload Image 2:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile2(e.target.files[0])}
            style={{ marginBottom: "0.5em" }}
            required
          />
        </div>

        {/* Third Content Summary and Image */}
        <div style={{ marginBottom: "1em" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5em",
              color: "#a3643a",
              fontWeight: "bold",
            }}
          >
            Content Summary 3:
          </label>
          <textarea
            rows={4}
            value={content3}
            onChange={(e) => setContent3(e.target.value)}
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
            Upload Image 3:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile3(e.target.files[0])}
            style={{ marginBottom: "0.5em" }}
            required
          />
        </div>

        {/* Category */}
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

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.9em",
            background: "#a3643a",
            color: "white",
            border: "none",
            borderRadius: 6,
          }}
        >
          {loading ? "Adding Blog..." : "Add Blog Post"}
        </button>
      </form>
    </div>
  );
}
