import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for creating scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {boolean} options.once - Whether to trigger animation only once
 * @param {Function} options.onChange - Callback when visibility changes
 * @returns {Object} ref and inView status
 */
const useScrollAnimation = ({ 
  threshold = 0.2, 
  once = true,
  onChange = null
} = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold,
    once
  });

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(inView);
    }
  }, [inView, onChange]);

  return { ref, inView };
};

export default useScrollAnimation;
