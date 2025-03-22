import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ onClose, setIsLoggedIn, setUserType }) {
  const [userType, setUser] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userType === "student") {
      if (email === "student@gmail.com" && password === "student") {
        toast.success("Student login successful!");
        localStorage.setItem("userType", "student");
        localStorage.setItem("userName", "Dushyant Singh Chauhan");
        localStorage.setItem("userEmail", "student@gmail.com");
        setIsLoggedIn(true);
        setUserType("student");
        navigate("/");
        onClose();
      } else {
        toast.error("Invalid student credentials!");
      }
    } else {
      if (email === "instructor@gmail.com" && password === "instructor") {
        toast.success("Instructor login successful!");
        localStorage.setItem("userType", "instructor");
        setIsLoggedIn(true);
        setUserType("instructor");
        navigate("/organiser");
        onClose();
      } else {
        toast.error("Invalid instructor credentials!");
      }
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#000814] p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✖
        </button>
        <p className="text-2xl font-bold mb-4 text-center text-white">Welcome Back</p>

        <div className="flex bg-gray-800 rounded-full p-1 w-full mb-4">
          <button
            className={`flex-1 py-2 text-center text-white rounded-full ${
              userType === "student" ? "bg-black" : "text-gray-400"
            }`}
            onClick={() => setUser("student")}
          >
            User
          </button>
          <button
            className={`flex-1 py-2 text-center text-white rounded-full ${
              userType === "instructor" ? "bg-black" : "text-gray-400"
            }`}
            onClick={() => setUser("instructor")}
          >
            Organiser
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder={`Enter your ${userType} email`}
            className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password"
            placeholder="Enter your password"
            className="bg-gray-800 w-full p-2 border border-gray-300 rounded mb-3 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <button className="w-full mt-2 text-blue-500 hover:underline">
          Forgot Password?
        </button>

        <button onClick={handleProfileClick} className="w-full mt-4 text-blue-500 hover:underline">
          Go to Profile
        </button>
      </div>
    </div>
  );
}

export default Login;
