import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Extract unique categories from posts
  const categories = ["all", ...new Set(posts.map((post) => post.category))];

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error loading posts:", error);
      } else {
        setPosts(data);
        setFilteredPosts(data);
      }
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (post) => post.category?.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, categoryFilter, posts]);

  return (
    <section
      className="blog-section"
      style={{
        maxWidth: "1150px",
        margin: "2em auto",
        textAlign: "center",
        backgroundColor: "#faf9f6",
        padding: "3em 0",
      }}
    >
      {/* Styled header */}
      <div
        style={{
          width: "100%",
          background: "#f8ece3",
          borderTop: "1px solid #e6d7c6",
          borderBottom: "1px solid #e6d7c6",
          padding: "1.5em 0",
          textAlign: "center",
          marginBottom: "2.5em",
          fontFamily: "Playfair Display, serif",
          color: "#a3643a",
          fontWeight: "bold",
          fontSize: "2.5em",
        }}
      >
        All Blogs
      </div>

      {/* Category filter */}
      <div style={{ marginBottom: "1.5em" }}>
        <label
          htmlFor="categoryFilter"
          style={{ marginRight: "0.6em", fontWeight: "bold", color: "#8c6239" }}
        >
          Filter by category:
        </label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{
            padding: "0.3em 0.8em",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1em",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search blogs by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "250px",
          padding: "0.5em 1em",
          marginBottom: "2.5em",
          borderRadius: "20px",
          border: "1px solid #ccc",
          fontSize: "1em",
        }}
      />

      <div
        className="blog-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3em",
          justifyContent: "center",
          margin: "0 auto",
          gridAutoRows: "minmax(520px, auto)",
        }}
      >
        {filteredPosts.length ? (
          filteredPosts.map((post, i) => (
            <motion.article
              className="blog-card"
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 6px 24px 0 rgba(0,0,0,0.09)",
                padding: "2.5em 1.7em 2em 1.7em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={post.image_url}
                alt={post.title}
                loading="lazy"
                style={{
                  width: "260px",
                  height: "312px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "1.6em",
                  boxShadow: "0 2px 8px 0 rgba(153, 133, 101, 0.10)",
                }}
              />
              <div
                style={{
                  color: "#ab926f",
                  fontSize: "0.95em",
                  letterSpacing: "0.13em",
                  marginBottom: "1em",
                  textTransform: "uppercase",
                }}
              >
                {post.category}
              </div>
              <Link
                to={`/blog/${post.id}`}
                style={{
                  textDecoration: "none",
                  color: "#8c6239",
                  width: "100%",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "2em",
                    textAlign: "center",
                    marginBottom: "1.1em",
                    lineHeight: 1.15,
                  }}
                >
                  {post.title}
                </h2>
              </Link>
              <div
                style={{
                  color: "#473528",
                  fontSize: "1.08em",
                  lineHeight: 1.65,
                  textAlign: "center",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: "3.6em",
                  opacity: 0.9,
                  marginBottom: "0.2em",
                  width: "100%",
                  marginInline: "auto",
                  wordBreak: "break-word",
                }}
              >
                {post.content}
              </div>
            </motion.article>
          ))
        ) : (
          <p>No blogs match your search.</p>
        )}
      </div>
    </section>
  );
}
