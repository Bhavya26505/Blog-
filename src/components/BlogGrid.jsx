import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase"; // Your Supabase client config

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(3);
        if (error) {
          console.error("Error fetching popular blogs:", error);
        } else {
          setPosts(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching blogs:", err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="blog-section">
      <h3
        className="blog-heading"
        style={{
          fontSize: "0.92em",
          fontWeight: "normal",
          letterSpacing: "0.08em",
          display: "block",
          color: "#a3643a",
          marginBottom: "0.3em",
        }}
      >
        Popular Posts
      </h3>
      <h2>On the Blog</h2>
      <div
        className="blog-grid"
        style={{ display: "flex", gap: "1.7em", overflowX: "auto" }}
      >
        {posts.map((post, i) => (
          <motion.div
            className="blog-card"
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ minWidth: "250px" }}
          >
            <Link
              to={`/blog/${post.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={post.image_url}
                alt={post.title}
                loading="lazy"
                style={{ width: "100%", height: "190px", objectFit: "cover" }}
              />
              <div className="blog-card-overlay">
                <h4 className="blog-card-title">{post.title}</h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
