'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.log(error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-[#00c3cf]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#00c3cf] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? 
            Feel free to reach out using the form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-200">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#22132b] p-4 rounded-full mr-4 border border-[#00c3cf]/30">
                  <FaEnvelope className="h-6 w-6 text-[#00c3cf]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 mb-1">Email</h4>
                  <a href="mailto:contact@vibecoding.com" className="text-gray-400 hover:text-[#00c3cf] transition-colors">
                    anands2959@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#22132b] p-4 rounded-full mr-4 border border-[#00c3cf]/30">
                  <FaPhone className="h-6 w-6 text-[#00c3cf]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-[#00c3cf] transition-colors">
                    +91 7985165239
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#22132b] p-4 rounded-full mr-4 border border-[#00c3cf]/30">
                  <FaMapMarkerAlt className="h-6 w-6 text-[#00c3cf]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 mb-1">Location</h4>
                  <p className="text-gray-400">
                   Grasim Colony Renukoot, Sonebhadra (UP) - 231217
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-gray-200">
                Available For
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-[#00c3cf] mr-2">•</span>
                  <span className="text-gray-400">Freelance Projects</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#00c3cf] mr-2">•</span>
                  <span className="text-gray-400">Full-time Positions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#00c3cf] mr-2">•</span>
                  <span className="text-gray-400">Consulting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#00c3cf] mr-2">•</span>
                  <span className="text-gray-400">Speaking Engagements</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1a0f22] rounded-xl shadow-md p-6 sm:p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00c3cf] focus:border-transparent bg-gray-700 text-gray-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00c3cf] focus:border-transparent bg-gray-700 text-gray-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00c3cf] focus:border-transparent bg-gray-700 text-gray-200"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00c3cf] focus:border-transparent bg-gray-700 text-gray-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00c3cf] hover:bg-[#00a8b3] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00c3cf] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Your message has been sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}