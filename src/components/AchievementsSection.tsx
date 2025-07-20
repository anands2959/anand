'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'medal' | 'certificate' | 'award';
};

const achievements: Achievement[] = [
  {
    title: 'Flight Model Development',
    organization: 'Boeing Program, Indian Institute of Technology (IIT) Kanpur',
    date: 'JAN 2023',
    description: 'Successfully led a team to create a high-performance flight model, achieving top performance and recognition in the program.',
    icon: 'trophy'
  },
  {
    title: 'Prolific Mobile App Development',
    organization: 'Brand Fabricator',
    date: 'MAR 2025',
    description: 'Developed and uploaded over 50+ mobile applications on the Google Play Store.',
    icon: 'medal'
  },
  {
    title: 'National Tally Championship',
    organization: 'Tally Academy, Renukoot(Sonebhadra)',
    date: 'MAR 2021',
    description: 'Awarded for distinctive performance in this competition with a grade of ‘A’',
    icon: 'certificate'
  },
  // {
  //   title: 'Outstanding Research Contribution',
  //   organization: 'International Conference on ML',
  //   date: 'May 2021',
  //   description: 'Recognized for research paper on optimizing neural networks for edge devices.',
  //   icon: 'award'
  // },
];

export function AchievementsSection() {
  const getIcon = (iconType: Achievement['icon']) => {
    switch (iconType) {
      case 'trophy':
        return <FaTrophy className="h-6 w-6 text-[#00c3cf]" />;
      case 'medal':
        return <FaMedal className="h-6 w-6 text-[#00c3cf]" />;
      case 'certificate':
        return <FaCertificate className="h-6 w-6 text-[#00c3cf]" />;
      case 'award':
        return <FaAward className="h-6 w-6 text-[#00c3cf]" />;
      default:
        return <FaTrophy className="h-6 w-6 text-[#00c3cf]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-[#22132b]"
      style={{
        backgroundImage: 'url(/achievements-texture.svg)',
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
            My <span className="text-[#00c3cf]">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments that highlight my dedication and expertise in the field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a0f22] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#22132b] p-4 rounded-full mr-4 border border-[#00c3cf]/30">
                  {getIcon(achievement.icon)}
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-200">
                      {achievement.title}
                    </h3>
                    
                    <motion.span 
                      className="text-xs font-medium text-[#00c3cf] bg-[#22132b] px-3 py-1 rounded-full border border-[#00c3cf]/30 mt-2 sm:mt-0"
                      whileHover={{ scale: 1.05, backgroundColor: '#00c3cf', color: '#ffffff' }}
                    >
                      {achievement.date}
                    </motion.span>
                  </div>
                  
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    {achievement.organization}
                  </h4>
                  
                  <p className="text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}