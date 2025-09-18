import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Uploads() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    async function fetchUploads() {
      const { data, error } = await supabase
        .from("uploads")
        .select()
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching uploads:", error);
      } else {
        setUploads(data);
      }
    }
    fetchUploads();
  }, []);

  if (!uploads.length)
    return (
      <p style={{ textAlign: "center", color: "#af9673", marginTop: "2em" }}>
        No uploads found.
      </p>
    );

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "3em auto",
        padding: "0 1em",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.4em",
          fontWeight: "700",
          marginBottom: "2em",
          color: "#a3643a",
          letterSpacing: "0.06em",
        }}
      >
        Uploads
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3em",
        }}
      >
        {uploads.map(({ id, image_url, description }, i) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              backgroundColor: "#faf9f6",
              borderRadius: "20px",
              boxShadow: "0 10px 32px rgba(175, 150, 115, 0.12)",
              overflow: "hidden",
              padding: "0",
              gap: "0",
              minHeight: "240px",
            }}
          >
            <div style={{ flexBasis: "50%", minWidth: 0 }}>
              <img
                src={image_url}
                alt="upload"
                style={{
                  width: "100%",
                  height: "auto", // allow height to adjust to aspect ratio
                  maxHeight: "400px", // optional max height for layout consistency
                  objectFit: "contain", // show whole image without cropping
                  borderRadius: i % 2 === 0 ? "20px 0 0 20px" : "0 20px 20px 0",
                  display: "block",
                  background: "#f9f6f1", // optional background color for letterboxing
                }}
              />
            </div>

            <div
              style={{
                flexBasis: "50%",
                width: "100%",
                background: "#f8e9dd",
                padding: "2.2em 2em",
                textAlign: "left",
                color: "#8c6239",
                fontFamily: "'Playfair Display', serif",
                borderRadius: i % 2 === 0 ? "0 20px 20px 0" : "20px 0 0 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontSize: "1.23em",
                lineHeight: 1.68,
                fontWeight: 500,
              }}
            >
              {description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
