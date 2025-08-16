import React from 'react';
import { motion } from 'framer-motion';
import { Code, Loader } from 'lucide-react';

const Loading = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const dotVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [-20, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5 }
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-purple-600/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"
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

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="relative mb-8"
        >
          <motion.div 
            className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl flex items-center justify-center relative"
            variants={pulseVariants}
            animate="animate"
          >
            <Code size={48} className="text-white" />
            
            {/* Orbital Ring */}
            <motion.div 
              className="absolute inset-0 border-2 border-primary-300/30 rounded-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Abhisek Behera
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Loading portfolio...
          </p>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-2 mb-8"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-3 h-3 bg-primary-500 rounded-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              delay: 0.8,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
