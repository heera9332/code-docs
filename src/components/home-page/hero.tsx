import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-white mb-6"
        >
          Tech Documentation Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Your comprehensive guide to modern web development and programming. Explore our extensive documentation and tutorials.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#features"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Documentation
          </a>
        </motion.div>
      </div>
    </section>
  );
}