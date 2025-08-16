import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import ScheduleModal from './ScheduleModal';

const Experience = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'MERN Stack Development Trainee',
      company: 'Local Tech Startup',
      location: 'Remote',
      period: 'April 2025 - Present',
      description: 'Started a professional role as a MERN stack Trainee, working on full-stack development and learning from senior team members. Contributing to company projects while continuing to expand my technical skills in MongoDB, Express.js, React.js, and Node.js.',
      achievements: [
        'Working on full-stack development of a Clinic and Hospital Management System using the MERN stack.',
        'Building responsive UI with React.js and integrating REST APIs for smooth data flow.',
        'Collaborating with the team to enhance features and improve system performance.',
        'Collaborated with team on code reviews and learned Git workflows'
      ],
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git']
    },
    {
      id: 2,
      title: 'Web Development Intern',
      company: 'Digital Solutions Agency',
      location: 'Office',
      period: 'January 2025 - April 2025',
      description: 'Completed a 3-month internship where I gained hands-on experience in web development. Worked on real client projects under supervision and learned industry best practices.',
      achievements: [
        'Contributed to the development of a Learning Management System using the MERN stack.',
        'Learned to work with APIs and handle async JavaScript',
        'Created and integrated RESTful APIs for secure and efficient data handling.',
        'Improved user experience through frontend enhancements and clean React.js component design.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','React.js', 'Node.js','Express.js', 'MongoDB','Git']
    },
    {
      id: 4,
      title: 'Self-Taught Learning',
      company: 'Personal Development',
      location: 'Home',
      period: '2023 - 2024',
      description: 'Dedicated self-learning through online courses, tutorials, and coding challenges. Built multiple projects to practice and solidify my understanding of web development fundamentals.',
      achievements: [
        'Completed 200+ hours of coding tutorials and courses',
        'Built 10+ practice projects including calculators, to-do apps, and games',
        'Learned fundamental programming concepts and problem-solving skills',
        'Established daily coding routine and consistent learning habits'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js','Express.js', 'MongoDB']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            My journey as a beginning developer, from self-learning to professional experience
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-md hidden md:block"></div>

              <div className={`card p-6 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-600 font-medium mb-2">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Looking for more details about my experience?
          </p>
          <button 
            onClick={() => setIsScheduleModalOpen(true)}
            className="btn-primary px-8 py-3 inline-flex items-center gap-2"
          >
            <Calendar size={20} />
            Schedule a Call
          </button>
        </div>
      </div>
      
      {/* Schedule Modal */}
      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </section>
  );
};

export default Experience;
