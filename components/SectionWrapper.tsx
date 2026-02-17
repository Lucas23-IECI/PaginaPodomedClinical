import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionWrapper: React.FC<Props> = ({ children, className = "", id, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
