import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddBlog from "./components/AddBlog";
import Uploads from "./pages/Uploads";
import AddUpload from "./components/AddUpload";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard"; // add this new component

function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uploads" element={<Uploads />} />

        {/* Login */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />

        {/* Admin Dashboard as entry point for admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Protected admin routes */}
        <Route
          path="/admin-add-blog"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-add-upload"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddUpload />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
