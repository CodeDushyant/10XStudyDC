import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import CoursesList from "./CoursesList";
import NewEvent from "./NewEvent"; // Import NewEvent component

function Organiser() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewEvent, setShowNewEvent] = useState(false); // State for modal

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://codehelp-apis.vercel.app/api/get-top-courses"
        );
        const data = await response.json();
        const allCourses = Object.values(data).flat();
        setCourses(allCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-5 h-screen">
        <h2 className="text-xl font-bold mb-6">StudyNotion</h2>
        <nav className="space-y-2">
          <a className="block py-2 px-4 bg-gray-700 rounded">Dashboard</a>
          <a className="block py-2 px-4 hover:bg-gray-700 rounded">
            My Profile
          </a>
          <a className="block py-2 px-4 bg-yellow-600 rounded">My Courses</a>
          <a className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
          <a className="block py-2 px-4 hover:bg-gray-700 rounded">Log Out</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Course</h1>
          <button
            className="bg-yellow-600 px-4 py-2 rounded flex items-center"
            onClick={() => setShowNewEvent(true)} // Open modal
          >
            <FaPlus className="mr-2" /> New
          </button>
        </div>

        {/* Course List */}
        {loading ? (
          <p className="text-center py-4">Loading courses...</p>
        ) : (
          <CoursesList courses={courses} />
        )}
      </main>

      {/* NewEvent Modal */}
      {showNewEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-1/2">
            <NewEvent onClose={() => setShowNewEvent(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Organiser;
