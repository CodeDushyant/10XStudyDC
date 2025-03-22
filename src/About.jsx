import React from 'react';
import dushyant from './founders/dushyant2.jpg';

function About() {
  const founders = [
    { name: "Dushyant Singh Chauhan", image: dushyant },
    
  ];

  return (
    <div className="p-10 text-center bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">About AlgoNinjas</h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-300">
      AlgoNinjas is a coding course platform offering expert-led training in data structures, algorithms, web development, and competitive programming. It helps learners gain practical skills, excel in coding interviews, and advance their tech careers.
      </p>

      {/* Founders Section */}
      <h2 className="text-3xl font-semibold mt-10 mb-6">Founder</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {founders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={founder.image} alt={founder.name} 
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover" />
            <p className="mt-4 text-lg font-medium">{founder.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
