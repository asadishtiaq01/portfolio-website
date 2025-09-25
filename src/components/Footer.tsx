import React from 'react';
import { MessageCircle, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Asad Ishtiaq</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate Software Engineer with 2+ years of experience in building scalable web applications. Specializing in React.js, Node.js, NestJS, and modern full-stack development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/923411934711"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-asad-ishtiaq-bba065248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ranaasadishtiaq@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">ranaasadishtiaq@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+92 341 1934711</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
                <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </a>
                <a href="#education" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Education
                </a>
              </div>
              <div className="space-y-3">
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
                <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Asad Ishtiaq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;