import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AddUpload() {
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!description || !imageFile) {
      alert("Please complete all fields");
      return;
    }
    setLoading(true);

    try {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("uploads-images")
        .upload(fileName, imageFile);
      if (uploadError) {
        alert("Image upload failed: " + uploadError.message);
        setLoading(false);
        return;
      }
      const {
        data: { publicUrl },
      } = supabase.storage.from("uploads-images").getPublicUrl(fileName);

      const { error: insertError } = await supabase
        .from("uploads")
        .insert([{ image_url: publicUrl, description: description }]);
      if (insertError) {
        alert("Failed to add upload: " + insertError.message);
        setLoading(false);
        return;
      }
      alert("Upload added successfully!");
      setDescription("");
      setImageFile(null);
    } catch (err) {
      alert("Error: " + err.message);
    }
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "2em auto", padding: "1em" }}
    >
      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5em", marginBottom: "1em" }}
      />
      <label>Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
        style={{ marginBottom: "1em" }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "0.6em",
          backgroundColor: "#a3643a",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Uploading..." : "Add Upload"}
      </button>
    </form>
  );
}
