import React, { useEffect } from 'react';
import frame22 from "./founders/Frame22.png";


function Signup({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Stop scrolling when modal opens
    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling when closed
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50 w-full h-full">
      <div className="bg-[#000814] w-[80vw] h-[80vh] flex shadow-lg rounded-lg relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
        >
          ✖
        </button>

        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Welcome To 10xRadar</h2>

          <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800" />
          <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800" />
          <input type="text" placeholder="Contact Number" className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800" />
          <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-3 bg-gray-800" />
          <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded mb-4 bg-gray-800" />

          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Signup
          </button>
        </div>

        {/* Right Side - Image */}
        
<div className='w-[430px] h-[370px] flex  justify-end align-bottom'><div className="h-full w-full bg-cover bg-center justify-end mt-20" style={{ backgroundImage: `url(${frame22})` }}></div></div>
      </div>
    </div>
  );
}

export default Signup;
