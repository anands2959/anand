'use client';

import { motion } from 'framer-motion';

type Education = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string[];
  logo: string;
};

const educations: Education[] = [
  {
    institution: 'Goel Institute of Technology and Management',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    period: '2021 - 2025',
    location: 'Lucknow (UP), India',
    description: [
      // 'Graduated with First Class Honors (8.7 CGPA)',
      // 'Specialized in Artificial Intelligence and Machine Learning',
      // 'Completed capstone project on "Neural Network-based Image Recognition"',
      // 'Active member of the Coding Club and participated in multiple hackathons'
    ],
    logo: '/aktu.png'
  },
  {
    institution: 'Pt Jns Inter College',
    degree: 'Intermediate',
    field: 'Science',
    period: '2020 - 2021',
    location: 'Renukoot (UP), India',
    description: [
      // 'Achieved 9.2 CGPA with distinction',
      // 'Research focus on Deep Learning and Computer Vision',
      // 'Published a paper on "Efficient Transformer Models for NLP Tasks"',
      // 'Teaching Assistant for undergraduate programming courses'
    ],
    logo: '/up.png'
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-[#1a0f22]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="text-[#00c3cf]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and expertise in the field of technology and computer science.
          </p>
        </motion.div>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#22132b] rounded-xl overflow-hidden shadow-lg p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#1a0f22] rounded-full border border-[#00c3cf]/30 flex items-center justify-center">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`} 
                      className="w-17 h-17 object-contain rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <motion.h3 
                      className="text-xl font-bold text-gray-200 mb-2 sm:mb-0"
                      animate={{ color: '#00c3cf' }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      {edu.degree} in {edu.field}
                    </motion.h3>
                    
                    <motion.span 
                      className="text-sm font-medium text-[#00c3cf] bg-[#1a0f22] px-3 py-1 rounded-full border border-[#00c3cf]/30"
                      whileHover={{ scale: 1.05, backgroundColor: '#00c3cf', color: '#ffffff' }}
                    >
                      {edu.period}
                    </motion.span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-300 mb-2">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-gray-400 mb-2">
                    {edu.location}
                  </p>
                  
                  <ul className="space-y-2 mt-4">
                    {edu.description.map((item, i) => (
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
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          •
                        </motion.span>
                        <span className="text-gray-400">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}