import { motion } from 'framer-motion';

const features = [
  {
    title: "ReactJS",
    description: "Explore the power of ReactJS, a popular JavaScript library for building user interfaces.",
    highlights: ["Introduction to JSX", "Creating components", "React Hooks", "Routing"]
  },
  {
    title: "Next.js",
    description: "Master Next.js, the React framework for building server-rendered and static websites.",
    highlights: ["Getting started", "SSR vs SSG", "API Routes", "Image optimization"]
  },
  {
    title: "TypeScript",
    description: "Learn TypeScript, the superset of JavaScript that adds static typing.",
    highlights: ["TypeScript setup", "Interfaces & types", "React integration", "Advanced concepts"]
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

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Documentation
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
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