import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CourseDetail from "./components/CourseDetail";
import Organiser from "./Organiser"; // ✅ Import Organiser
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Profile from "./Profile";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    if (storedUserType) {
      setIsLoggedIn(true);
      setUserType(storedUserType);
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bgDark2">
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLoginClick={() => {
            setShowLogin(true);
            setShowSignup(false);
          }}
          onSignupClick={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
        />

        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            setIsLoggedIn={setIsLoggedIn}
            setUserType={(type) => {
              setUserType(type);
              localStorage.setItem("userType", type);
            }}
          />
        )}

        {showSignup && (
          <Signup
            onClose={() => setShowSignup(false)}
            setIsLoggedIn={setIsLoggedIn}
            setUserType={(type) => {
              setUserType(type);
              localStorage.setItem("userType", type);
            }}
          />
        )}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
  <Route path="/organiser" element={<Organiser />} />
  <Route path="/profile" element={<Profile />} /> {/* ✅ Add this route */}
</Routes>
      </div>
    </Router>
  );
};

export default App;
