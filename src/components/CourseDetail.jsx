import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = Object.values(courses).flat().find(c => c.id.toString() === id);

  if (!course) return <h2 className="text-center text-2xl mt-10 text-red-500">Course Not Found</h2>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 text-white shadow-xl rounded-lg mt-10 flex flex-col md:flex-row gap-6">
      {/* Left: Course Image */}
      <div className="w-full md:w-1/2">
        <img src={course.image.url} alt={course.title} className="w-full h-64 rounded-lg object-cover shadow-lg" />
      </div>

      {/* Right: Course Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-400">Free Event</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </div>

        {/* Course Title */}
        <h1 className="text-3xl font-bold mt-4">{course.title}</h1>

        {/* Course Description */}
        <p className="text-gray-300 mt-2 leading-relaxed">{course.description}</p>

        {/* Team Size */}
        {course.teamSize && (
          <p className="mt-2 text-gray-400 font-medium">Team Size: {course.teamSize}</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
