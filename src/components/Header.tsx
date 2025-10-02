import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-16 px-4 relative z-10"
    >
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 text-primary"
        style={{ 
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '-0.03em'
        }}
      >
        Support the Hadzabe Community
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium"
      >
        Help the Hadzabe people who live in the desert with limited resources. 
        Your donations provide essential support for food, water, healthcare, and education.
      </motion.p>
    </motion.header>
  );
};
