import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Logo from '../asstes/image2.png';
import CMS from '../asstes/Doctor_banner_login.png';
import LogoPP from '../asstes/LPP.webp';
import Compiler from '../asstes/LPP.png';
import Weather from '../asstes/weather.png';
import Note from '../asstes/noteApp.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: ' MediEz– Clinic Management System',
      description: 'A comprehensive clinic management system designed to streamline patient management, appointment scheduling, and medical record keeping. Built with React, Node.js, Express.js, and MongoDB. Features include user authentication, appointment booking, and patient record management.',
      image: <img src={CMS} alt="Clinic Management System" style={{ width: '45%', height: '10%!important' }} />,
      technologies: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Web Socket', 'JWT', 'Dynamic PDF'],
      githubUrl: 'https://github.com/yourusername/todo-app',
      liveUrl: 'https://cms-frontend-blue.vercel.app/',
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      description: 'An immersive, interactive portfolio website showcasing cutting-edge web development skills and innovative projects. Built with React, Tailwind CSS, and Framer Motion for stunning animations. Features dark mode toggle, responsive design, smooth scrolling, and dynamic project filtering. Optimized for performance with lazy loading and modern web standards.',
      image: <img src={LogoPP} alt="Personal Portfolio" />,
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.netlify.app',
    },
    {
      id: 3,
      title: 'Learnly (School Management System)',
      description: 'A functional school management system built with JavaScript, Node.js, Express.js, MongoDB, React. Supports basic CRUD operations and features a clean, user-friendly interface. One of my early projects to practice DOM manipulation.',
      image: <img src={Logo} alt="Learnly (School Management System)" style={{ width: '390px' }} />,
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'React', 'JWT', 'Dynamic PDF'],
      githubUrl: 'https://github.com/Abhisek1233/School_Management_System_Frontend',
      liveUrl: 'https://school-management-system-frontend-zeta.vercel.app/',
    },
    
    {
      id: 4,
      title: 'Simple Note App',
      description: 'An intelligent, collaborative note-taking app designed for real-time synchronization and productivity. Built with Next.js, Firebase, and Google\'s Gemini AI. Features include AI-generated tags, secure note sharing, rich text editing, and robust offline support.',
      image: <img src={Note} alt="Simple Note App" style={{ width: '100%' }} />,
      technologies: ['TypeScript', 'Next.js', 'Firebase', 'Google Cloud Functions', 'Express.js', 'Node.js'],
      githubUrl: 'https://github.com/Abhisek1233/Simple_Note_App',
      liveUrl: 'https://simple-note-app-beta.vercel.app/',
    },
    {
      id: 6,
      title: 'Compiler App',
      description: 'A simple compiler application that supports multiple programming languages. Users can write, compile, and run code snippets in a web-based environment. Built to practice API integration and async JavaScript.',
      image: <img src={Compiler} alt="Compiler App" style={{ width: '100%', height: '10%' }} />,
      technologies: ['JavaScript', 'HTML', 'CSS', 'WebAssembly', 'React', 'Express.js', 'Node.js', 'Web Socket'],
      githubUrl: 'https://github.com/Abhisek1233/frontend',
      liveUrl: 'https://frontend-rouge-two-42.vercel.app/',
    },
    {
      id: 7,
      title: 'Weather App',
      description: 'A simple weather application that fetches data from OpenWeatherMap API. Users can search for weather information by city name. Built to practice API integration and async JavaScript.',
      image: <img src={Weather} alt="Weather App" style={{ width: '100%', height: '10%' }} />,
      technologies: ['JavaScript', 'React', 'HTML', 'CSS', 'Weather API', 'Express.js', 'Node.js'],
      githubUrl: 'https://github.com/Abhisek1233/weather-app',
      liveUrl: 'https://weather-app-khaki-sigma-72.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group"
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
                  {project.image }
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative py-2 px-4 border border-gray-200 dark:border-gray-600 rounded-md hover:border-gray-300 dark:hover:border-gray-500"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={16} className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 hover:text-white dark:hover:text-white font-medium transition-all duration-300 py-2 px-4 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-primary-600 dark:hover:bg-primary-600"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm">Live Demo</span>
                    <ExternalLink size={16} className="transition-colors duration-300" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Abhisek1233?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
