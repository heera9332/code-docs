import { motion } from 'framer-motion';

const docs = [
  {
    title: "JavaScript",
    description: "Master JavaScript, the backbone of modern web development.",
    highlights: ["ES6+ features", "Async programming", "DOM manipulation", "OOP concepts"]
  },
  {
    title: "C Programming",
    description: "Delve into C programming, the foundation of many modern technologies.",
    highlights: ["Data types", "Memory management", "Pointers", "File handling"]
  },
  {
    title: "Java",
    description: "Learn Java, a versatile and powerful programming language.",
    highlights: ["Java basics", "OOP principles", "Collections", "Spring Boot"]
  },
  {
    title: "WordPress",
    description: "Discover the full potential of WordPress, the world's most popular CMS.",
    highlights: ["Site setup", "Theme development", "Plugin creation", "Gutenberg blocks"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Documentation() {
  return (
    <section id="docs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Documentation Library
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{doc.title}</h3>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <ul className="space-y-2">
                {doc.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-purple-600 mr-2">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}