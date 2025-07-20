'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1a0f22]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About <span className="text-[#00c3cf]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-200">
              Full Stack Developer with a passion for creating exceptional digital experiences
            </h3>
            
            <p className="text-gray-400 mb-6">
             I am a full stack developer with expertise in the web/mobile App development and Gen AI engineering and UI/UX design. I have experience in building scalable, secure, and reliable web applications, as well as designing user-friendly mobile apps. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. Many of my projects are open-source and available for others to explore and contribute to. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
            
            {/* <p className="text-gray-400 mb-6">
              I believe in creating digital products that not only look beautiful but also solve real problems 
              for users. My approach combines technical excellence with creative design thinking to deliver 
              outstanding results for every project.
            </p>
             */}
            <p className="text-gray-400 mb-8">
              When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source 
              projects, or mentoring aspiring developers. I&apos;m always eager to learn new technologies and 
              collaborate on innovative projects.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/anands2959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/anands2959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              
            
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-200">
              My Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'JavaScript/TypeScript', level: 95 },
                { name: 'React/Next.js', level: 90 },
                { name: 'UI/UX Design', level: 85 },
                { name: 'Generative AI', level: 80 },
                { name: 'Mobile App Development', level: 80 },
              ].map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <motion.div 
                      className="bg-[#00c3cf] h-2.5 rounded-full shimmer" 
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}