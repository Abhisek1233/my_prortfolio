import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            I'm a passionate MERN Stack Developer with a focus on crafting responsive and intuitive web applications. With just over six months in the tech industry, I'm committed to learning and growing in this exciting field, actively looking for opportunities to contribute to innovative projects.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1 text-gray-600 dark:text-gray-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Background</h3>
            <p>
              Recently started my journey in MERN Stack development through intensive learning and hands-on practice. I've been building full-stack projects using MongoDB, Express.js, React, and Node.js, constantly expanding my skill set through online courses and coding challenges.
            </p>
          </div>

          <div className="flex-1 text-gray-600 dark:text-gray-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Goals</h3>
            <p>
              Actively seeking opportunities as a MERN Stack Developer where I can contribute to meaningful projects while continuing to learn from experienced team members. I'm excited to bring fresh perspectives and enthusiasm to collaborative development environments and am available for full-time positions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

