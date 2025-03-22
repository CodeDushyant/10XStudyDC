import React, { useEffect, useState } from "react";

const ClassList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://codehelp-apis.vercel.app/api/get-top-courses"
        );
        const result = await response.json();

        console.log("API Response:", result); // Debugging

        const coursesData = result.data;

        if (!coursesData) {
          console.error("Error: No courses found in API response.");
          return;
        }

        const allCourses = Object.values(coursesData).flat(); // Flatten category arrays

        console.log("Extracted Courses:", allCourses);

        setCourses(allCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Available Courses</h2>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={course.image.url}
                  alt={course.image.alt}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassList;
