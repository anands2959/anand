'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1a0f22] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-30 w-50 mr-2">
                <Image 
                  src="/logo.png" 
                  alt="Vibe Coding Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional, and user-friendly digital experiences with over 3+ years of expertise in Full Stack development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/anands2959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/anands2959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="h-6 w-6" />
              </a> */}
              <a 
                href="https://codepen.io/anands2959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300"
                aria-label="CodePen Profile"
              >
                <FaCodepen className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Grasim Colony Renukoot, Sonebhadra (UP) - 231217
              </li>
              <li>
                <a href="mailto:anands2959@gmail.com" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  anands2959@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#00c3cf] transition-colors duration-300">
                  +91 7985165239
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#22132b] mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Vibe Coding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}