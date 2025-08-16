import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Palette, 
  GitBranch, 
  Terminal, 
  FileCode, 
  Layers,
  Settings,
  Users,
  Search,
  Bug,
  BookOpen
} from 'lucide-react';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML/CSS', icon: Code },
        { name: 'JavaScript', icon: SiJavascript, color: '#2563eb', boaderRadius: '0.15rem' },
        { name: 'React', icon: FaReact },
        { name: 'Bootstrap', icon: FaBootstrap },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Responsive Design', icon: Smartphone },
      ],
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'REST APIs', icon: Globe },
        { name: 'Authentication', icon: Settings },
        { name: 'Server Deployment', icon: Server },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: Database },
        { name: 'Git/GitHub', icon: GitBranch },
        { name: 'VS Code', icon: FileCode },
        { name: 'Chrome DevTools', icon: Search },
        { name: 'Linux', icon: Terminal },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Problem Solving', icon: Search },
        { name: 'Documentation', icon: BookOpen },
        { name: 'Code Review', icon: FileCode },
        { name: 'Team Collaboration', icon: Users },
        { name: 'Debugging', icon: Bug },
        { name: 'Testing', icon: Settings },
      ],
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" style={skill.color && skill.boaderRadius? { color: skill.color, borderRadius: skill.boaderRadius } : {}}/>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always learning and exploring new technologies. Currently focusing on:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Redux', 'Next.js', 'Testing', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
