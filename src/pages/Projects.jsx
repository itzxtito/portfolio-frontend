import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Recipe App"
          description="A full-stack MERN app with user authentication, image uploads, comments, and favorites. Built using React, Node.js, Express, MongoDB, JWT, and bcrypt."
          liveLink="https://potluck-app.netlify.app/"
          frontendLink="https://github.com/itzxtito/capstone-frontend"
          backendLink="https://github.com/itzxtito/capstone-backend"
        />
      </div>
    </motion.section>
  );
}
