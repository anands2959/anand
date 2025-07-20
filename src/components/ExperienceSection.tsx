'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Experience = {
  company: string;
  logo: string;
  position: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: 'Brand Fabricator',
    logo: '/brand.jpeg',
    position: 'Mobile App Developer',
    period: 'AUG-2021 - MAR-2025',
    description: [
      'Developed and deployed multiple Android applications using React Native, improving user engagement by 30%',
      'Collaborated with design and backend teams to launch 10+ high-performance features ahead of deadlines.',
      'Optimized app performance through code refactoring and profiling tools, reducing load times by 40%.',
      // 'Integrated AI-powered features to enhance user experience and application functionality'
    ]
  },
  {
    company: 'Grasim Industries Ltd., Renukoot',
    logo: '/birla.png',
    position: 'User Management',
    period: 'AUG-2021 - MAR-2025',
    description: [
      'Supported the development of Android apps by implementing UI components and integrating APIs.',
      'Assisted senior developers in bug fixing and performance testing, improving overall app stability.',
      'Participated in team meetings and contributed ideas that improved onboarding UI by 15%.',
      // 'Integrated AI-powered features to enhance user experience and application functionality'
    ]
  },
  
  
];

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-20 bg-[#22132b]"
      style={{
        backgroundImage: 'url(/experience-texture.svg)',
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
            Work <span className="text-[#00c3cf]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto"></div>
        </motion.div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-4 bg-[#1a0f22] rounded-xl shadow-md overflow-hidden transition-all duration-300 ${activeIndex === index ? 'scale-[1.02] shadow-xl ring-2 ring-[#00c3cf]/30' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Company Logo */}
              <div className="md:w-1/4 bg-[#22132b] p-6 flex items-center justify-center">
                <motion.div 
                  className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00c3cf]/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Experience Details */}
              <div className="md:w-3/4 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <motion.h3 
                    className="text-xl font-bold text-gray-200"
                    animate={activeIndex === index ? { color: '#00c3cf' } : { color: '' }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.position}
                  </motion.h3>
                  <motion.span 
                    className="text-[#00c3cf] font-medium text-sm bg-[#22132b] px-3 py-1 rounded-full mt-2 sm:mt-0 border border-[#00c3cf]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                
                <motion.h4 
                  className="text-lg font-medium text-gray-300 mb-4"
                  animate={activeIndex === index ? { x: [0, 5, 0] } : { x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {exp.company}
                </motion.h4>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i + (index * 0.05) }}
                    >
                      <motion.span 
                        className="text-[#00c3cf] mr-2"
                        animate={activeIndex === index ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        •
                      </motion.span>
                      <span className="text-gray-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}