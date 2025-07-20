'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Himanshi Jatariya',
    role: 'CEO',
    company: 'AKX Brand',
    image: '/logo.png', // Replace with actual testimonial images
    text: 'Anand has very good skills in developing website and mobile app. His Work was very good. He was available everytime when i had some querries. He also gave inputs from his side for the solutions. I am fully Satisfied with the website and his work.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shubham Awasthi',
    role: 'ServiceNow Developer',
    company: 'Now Compiler',
    image: '/logo.png', // Replace with actual testimonial images
    text: 'Anand transformed our online presence with a sleek, responsive website. Their attention to detail and smooth execution exceeded our expectations!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Arpit Ranjan Malviya',
    role: 'Sales Officer',
    company: 'ITC',
    image: '/logo.png', // Replace with actual testimonial images
    text: 'Working with PulseBit.tech was a game-changer. They built our e-commerce platform with stunning UI/UX, and our sales skyrocketed!',
    rating: 4,
  },
  {
    id: 4,
    name: 'Anoop Sharma',
    role: 'Branch Manager',
    company: 'Utkarsh Small Finance Bank',
    image: '/logo.png', // Replace with actual testimonial images
    text: 'Anand professionalism and innovative approach made our app stand out. He delivered on time with excellent post-launch support.',
    rating: 5,
  },
  
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle manual navigation
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Handle testimonial hover
  const handleTestimonialHover = () => {
    setIsPaused(true);
  };

  const handleTestimonialLeave = () => {
    setIsPaused(false);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-[#00c3cf]' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#1a0f22]"
      style={{
        backgroundImage: 'url(/projects-texture.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
            Client <span className="text-[#00c3cf]">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take my word for it - here&apos;s what my clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={handleTestimonialHover}
                  onMouseLeave={handleTestimonialLeave}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-[#22132b] rounded-xl p-8 shadow-lg border border-[#00c3cf]/10 h-full">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#00c3cf]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-[#00c3cf]">{testimonial.role}, {testimonial.company}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p> 
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#00c3cf] w-6' : 'bg-gray-500 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-[#22132b] text-white p-3 rounded-full shadow-lg hover:bg-[#00c3cf] transition-colors duration-300 focus:outline-none hidden md:block"
            onClick={() => handleDotClick((activeIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-[#22132b] text-white p-3 rounded-full shadow-lg hover:bg-[#00c3cf] transition-colors duration-300 focus:outline-none hidden md:block"
            onClick={() => handleDotClick((activeIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}