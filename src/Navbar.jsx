import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./founders/logo10x.png"

function Navbar({ isLoggedIn, setIsLoggedIn, onLoginClick, onSignupClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userType");
    setIsLoggedIn(false); // ✅ Navbar updates instantly
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-10 h-6" />
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>

      <div className="flex space-x-4">
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button onClick={onLoginClick} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Login
            </button>
            <button onClick={onSignupClick} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
