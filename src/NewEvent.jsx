import React from "react";

function NewEvent({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full h-full bg-gray-900 text-white p-8 overflow-y-auto relative">
        
        {/* Close Button (Top Right Corner) */}
        <button
          className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded"
          onClick={onClose}
        >
          Close ✖
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">Create New Course</h2>

        {/* Course Form */}
        <div className="max-w-3xl mx-auto">
          <label className="block mb-2">Course Title:</label>
          <input
            type="text"
            placeholder="Enter Course Title"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white"
          />

          <label className="block mb-2">Course Short Description:</label>
          <textarea
            placeholder="Enter Description"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white"
          ></textarea>

          <label className="block mb-2">Price:</label>
          <input
            type="number"
            placeholder="Enter Price"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white"
          />

          <label className="block mb-2">Category:</label>
          <select className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white">
            <option>Choose a Category</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>AI & ML</option>
          </select>

          <label className="block mb-2">Course Thumbnail:</label>
          <input type="file" className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white" />

          <label className="block mb-2">Benefits of the Course:</label>
          <textarea
            placeholder="Enter Benefits of the course"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white"
          ></textarea>

          <label className="block mb-2">Requirements/Instructions:</label>
          <textarea
            placeholder="Enter Requirements of the course"
            className="w-full p-2 border border-gray-600 rounded mb-4 bg-gray-800 text-white"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-red-600 px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <button className="bg-yellow-600 px-4 py-2 rounded">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
