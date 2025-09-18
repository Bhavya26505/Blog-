import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error loading blog post: ", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    }
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading blog post...</p>;
  if (!post) return <p>Blog post not found.</p>;

  return (
    <article style={{ maxWidth: "700px", margin: "2em auto", padding: "1em" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#a3643a" }}>
        {post.title}
      </h1>

      <img
        src={post.image_url1}
        alt={post.title}
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          marginBottom: "1em",
          borderRadius: "12px",
          objectFit: "cover",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p
        style={{
          fontSize: "1.1em",
          lineHeight: 1.6,
          color: "#543927",
          marginBottom: "1.5em",
        }}
      >
        {post.content1}
      </p>

      {/* Additional content and images */}
      <div>
        <img
          src={post.image_url2}
          alt="Additional 1"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            marginBottom: "1em",
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          style={{
            fontSize: "1.1em",
            lineHeight: 1.6,
            color: "#543927",
            marginBottom: "1.5em",
          }}
        >
          {post.content2}
        </p>
      </div>

      <div>
        <img
          src={post.image_url3}
          alt="Additional 2"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            marginBottom: "1em",
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p style={{ fontSize: "1.1em", lineHeight: 1.6, color: "#543927" }}>
          {post.content3}
        </p>
      </div>
    </article>
  );
}
