'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: 'BotFusion - AI Chatbot Solution',
    description: 'A comprehensive task management system with real-time updates, team collaboration features, and performance analytics.',
    image: '/logo.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    githubUrl: 'https://github.com/anands2959/botfusion',
    liveUrl: 'https://botfusion-ten.vercel.app/'
  },
  {
    title: 'NextHire - AI Interview Bot',
    description: 'Built a real-time interview simulator using AI to generate and evaluate technical interview questions. Integrated OpenAI, developed frontend UI, and deployed a working MVP',
    image: '/logo.png',
    technologies: ['Next.js', 'Node.js', 'Firebase', 'Vapi', 'ChatGPT API'],
    githubUrl: 'https://github.com/anands2959/nexthire_ai',
    liveUrl: 'https://nexthire.anandsharma.info/nexthire'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Built with Next.js and Tailwind CSS.',
    image: '/logo.png',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'Razorpay API', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://akxbrand.com'
  },
  {
    title: 'GenioAI - AI Content Generator',
    description: 'An AI-powered application that generates content for blogs, Image, and Video materials. Utilizes OpenAI API, Stable Diffusion API, and Hugging Face API.',
    image: '/logo.png',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Framer Motion'],
    githubUrl: 'https://github.com/anands2959/genio.ai',
    liveUrl: 'https://genio-ai-two.vercel.app/'
  },
  
];

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-[#22132b]"
      style={{
        backgroundImage: 'url(/projects-texture.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Featured <span className="text-[#00c3cf]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development, 
            UI/UX design, and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-[#1a0f22] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${hoveredIndex === index ? 'shadow-2xl scale-[1.02] ring-2 ring-[#00c3cf]/30' : 'hover:shadow-xl'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <motion.div
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-white text-xl font-bold text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-gray-200 mb-3"
                  animate={hoveredIndex === index ? { color: '#00c3cf' } : { color: '' }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="text-xs font-medium bg-[#22132b] text-[#00c3cf] px-3 py-1 rounded-full border border-[#00c3cf]/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i + (index * 0.05) }}
                      whileHover={{ scale: 1.1, backgroundColor: '#00c3cf', color: '#ffffff' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`GitHub repository for ${project.title}`}
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Live demo for ${project.title}`}
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}