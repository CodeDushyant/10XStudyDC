import React from "react";
import profileImage from "./founders/profile.jpg"; // Ensure you have an image at this path

function Profile() {
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";

  return (
    <div className="text-white p-8 min-h-screen bg-gray-900 flex flex-col items-center">
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-500" />
        </div>

        {/* Profile Info */}
        <p className="text-xl mb-2"><strong>Name:</strong> {userName}</p>

        {/* About Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">About Me</h2>
        <p className="text-gray-300">
          Hi, I am {userName}. I am passionate about coding and technology. I enjoy solving algorithmic challenges
          and building projects that make an impact. 10xRadar has been a great learning experience for me.
        </p>

        {/* Project Section */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">About this Project</h2>
        <p className="text-gray-300">
          This platform helps students enhance their coding skills through various challenges and mentorship from
          industry experts. Join us to level up your skills and become a coding ninja!
        </p>
      </div>
    </div>
  );
}

export default Profile;