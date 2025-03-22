import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";
import frame from "./founders/frame.png"

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      
      {/* About AlgoNinjas Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Left Side: Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-blue-400">Welcome to 10xRadar</h1>
          <p className="text-lg text-gray-300">
            10xRadar is a platform for aspiring coders to improve algorithmic skills, join coding challenges, and learn from industry mentors.
          </p>
          <p className="text-lg text-gray-300">
            Students can log in using ID: <span className="text-blue-400">student@gmail.com </span> and Password: <span className="text-blue-400">student</span>, while instructors can access their accounts using ID: <span className="text-blue-400">instructor@gmail.com</span> instructor@gmail.com and Password: <span className="text-blue-400">instructor </span> .
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={frame}
            alt="AlgoNinjas"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
  <hr />
      {/* Browse by Category Section */}
      <div className="flex w-full h-auto  flex-wrap items-center justify-center px-8 md:px-16 py-6 rounded-lg">
        {/* Left Side: Title */}
        <h2 className="text-2xl font-semibold text-white md:w-full text-center mb-4">Browse by Category</h2>

        {/* Right Side: Filter Component */}
        <div className="w-full flex flex-wrap justify-center gap-4">
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default Home;
