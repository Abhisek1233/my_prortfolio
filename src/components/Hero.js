import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code } from 'lucide-react';
import pdf from '../resume.pdf';
import { 
  textReveal,
  buttonVariants,
  staggerContainer,
  staggerItem,
  floatingVariants
} from '../utils/animations';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollY } = useScroll();
  const { ref } = useScrollAnimation({ threshold: 0.1 });
  
  const roles = [
    "MERN Stack Developer",
    "Frontend Enthusiast", 
    "Problem Solver",
    "Tech Explorer"
  ];

  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Abhisek_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const avatarVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  const socialIconVariants = {
    initial: { scale: 0, y: 50 },
    animate: (i) => ({
      scale: 1,
      y: 0,
      transition: {
        delay: 1.2 + (i * 0.1),
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center justify-center relative z-10 pt-16 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="space-y-8"
        >
          {/* Avatar with floating animation */}
          <motion.div
            variants={avatarVariants}
            className="relative inline-block"
          >
            <motion.div 
              className="relative w-48 h-48 mx-auto mb-8"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <Code size={100} className="text-white z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </div>
              </div>
              {/* Orbital rings */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary-300/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-2 border border-purple-300/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced greeting */}
          <motion.div variants={staggerItem}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800">
                👋 Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1
              variants={textReveal}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Abhisek
              </motion.span>
              <motion.span 
                className="gradient-text block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Behera
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Animated role switcher */}
          <motion.div
            variants={staggerItem}
            className="h-16 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              >
                {roles[currentRole]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Enhanced description */}
          <motion.div variants={staggerItem}>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Passionate about creating{" "}
              <motion.span 
                className="text-primary-600 dark:text-primary-400 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                responsive web applications
              </motion.span>
              {" "}and exploring new technologies.
              <br className="hidden sm:block" />
              Recently started my coding journey and looking for opportunities to grow.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToContact}
              className="group btn-primary px-10 py-4 text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={downloadResume} 
              className="btn-secondary px-10 py-4 text-lg font-semibold flex items-center gap-3 group"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Download size={20} />
              </motion.div>
              Download Resume
            </motion.button>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex justify-center space-x-8 pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/Abhisek1233", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abhisek-behera-a797b3273/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abhisekbehera506@gmail.com", label: "Email" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  variants={socialIconVariants}
                  custom={i}
                  whileHover="hover"
                  href={social.href}
                  target={social.href.includes('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl z-20"
                  aria-label={social.label}
                >
                  <Icon 
                    size={24} 
                    className="relative z-30 text-gray-700 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" 
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-purple-100/50 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20 relative z-30"
        >
          <motion.div 
            className="flex flex-col items-center gap-3 cursor-pointer p-4 rounded-2xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">Scroll to explore</span>
            <motion.div 
              className="w-7 h-12 border-2 border-primary-500 dark:border-primary-400 rounded-full flex justify-center relative overflow-hidden bg-white/20 dark:bg-gray-800/30"
              whileHover={{ 
                borderColor: "rgb(147 51 234)",
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
              }}
            >
              <motion.div 
                className="w-1.5 h-4 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 shadow-sm"
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
