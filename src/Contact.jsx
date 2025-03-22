import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="max-w-2xl text-lg text-gray-300 text-center mb-8">
        Have any questions or want to collaborate? Get in touch with us!
      </p>

      {/* Contact Form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Your Name</label>
            <input type="text" className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Your Email</label>
            <input type="email" className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">Message</label>
            <textarea className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="mt-8">
        <p className="text-gray-300 text-lg">Email: <a href="mailto:contact@algoninjas.com" className="text-blue-400">contact@algoninjas.com</a></p>
        <p className="text-gray-300 text-lg mt-2">Phone: <span className="text-blue-400">+91 9876543210</span></p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-6">
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Contact;
