'use client';

import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon, CommandLineIcon, CpuChipIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
};

const services: Service[] = [
  {
    title: 'Gen AI Engineering',
    description: 'Implementing intelligent solutions using cutting-edge Gen AI technologies.',
    icon: <CpuChipIcon className="w-10 h-10" />,
    skills: ['Gen AI', 'Langchain', 'OpenAI', 'Embeddings', 'Prompt Engineering']
  },
  {
    title: 'Web Development',
    description: 'Creating responsive, modern web applications with cutting-edge technologies.',
    icon: <CodeBracketIcon className="w-10 h-10" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express']
  },
  {
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <GlobeAltIcon className="w-10 h-10" />,
    skills: ['React Native', 'iOS', 'Android', 'Firebase']
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing interfaces that enhance user engagement.',
    icon: <PaintBrushIcon className="w-10 h-10" />,
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research']
  },
  {
    title: 'Backend Development',
    description: 'Developing robust server-side applications and APIs to power your digital solutions.',
    icon: <CommandLineIcon className="w-10 h-10" />,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs']
  },
  
  {
    title: 'Deployment',
    description: 'Streamlining development workflows and deploying applications to production environments.',
    icon: <RocketLaunchIcon className="w-10 h-10" />,
    skills: ['AWS', 'CI/CD', 'Vercel', 'Netlify','Railway', 'GitHub Actions']
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#1a0f22]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="text-[#00c3cf]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized services I offer to help businesses and individuals achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#22132b] rounded-xl overflow-hidden shadow-lg p-6 border border-[#00c3cf]/10 hover:border-[#00c3cf]/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 195, 207, 0.1)' }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-[#1a0f22] rounded-full border border-[#00c3cf]/30 flex items-center justify-center mb-6 text-[#00c3cf]"
                  whileHover={{ scale: 1.05, backgroundColor: '#00c3cf', color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Content */}
                <div className="flex-grow">
                  <motion.h3 
                    className="text-xl font-bold text-gray-200 mb-3"
                    animate={{ color: ['#ffffff', '#00c3cf', '#ffffff'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-[#00c3cf] mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, i) => (
                        <motion.span 
                          key={i} 
                          className="text-xs font-medium text-gray-300 bg-[#1a0f22] px-2 py-1 rounded-full border border-[#00c3cf]/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * i }}
                          whileHover={{ backgroundColor: '#00c3cf', color: '#ffffff', borderColor: '#00c3cf' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}