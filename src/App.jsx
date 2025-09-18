import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail"; // Import the BlogDetail page
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBlog from "./components/AddBlog"; // Import the admin blog add form
import Uploads from "./pages/Uploads"; // Import the uploads page
import AddUpload from "./components/AddUpload"; // Import the add upload form

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />{" "}
        {/* Blog detail route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-add-blog" element={<AddBlog />} />{" "}
        {/* Admin blog add route */}
        <Route path="/uploads" element={<Uploads />} />{" "}
        {/* Uploads list page */}
        <Route path="/admin-add-upload" element={<AddUpload />} />{" "}
        {/* Admin upload add form */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
