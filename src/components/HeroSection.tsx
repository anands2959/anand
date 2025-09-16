'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { TypewriterEffect } from './TypewriterEffect';

export function HeroSection() {
  const skills = [
    'Web Developer',
    'Mobile App Developer',
    'Gen AI Engineer',
    'UI/UX Designer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8"
      style={{
        backgroundImage: 'url(/hero-texture.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I&apos;m</span>
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-[#00c3cf] to-[#00a8b3] bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Anand Kumar Sharma
              </motion.span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-24 sm:h-20 mb-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300">
                I&apos;m a{' '}
                <TypewriterEffect 
                  texts={skills} 
                  typingSpeed={80} 
                  deletingSpeed={40} 
                  delayBetweenTexts={2000}
                  className="text-[#00c3cf] font-semibold"
                />
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Crafting beautiful, functional, and user-friendly digital experiences with over 3+ years of expertise in <strong className='text-[#00c3cf]'>Full Stack </strong>development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="#contact" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="https://drive.google.com/file/d/1J13aHj8glD02KVJxAEYQYAbgaxCgNr9u/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#00c3cf] shadow-xl"
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(0, 195, 207, 0.5)', 
                  '0 0 20px rgba(0, 195, 207, 0.7)', 
                  '0 0 10px rgba(0, 195, 207, 0.5)'
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image 
                src="/developer.png" 
                alt="Anand Sharma - Developer" 
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-[#00c3cf] transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownIcon className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
