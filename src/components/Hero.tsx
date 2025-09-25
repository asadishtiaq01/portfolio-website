import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            AI
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Asad Ishtiaq
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-4">
          Software Engineer
        </h2>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Lahore, Pakistan
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Full-stack developer with  years of experience building scalable web applications using React.js, Node.js, NestJS, and TypeScript. Passionate about creating efficient, maintainable code and delivering exceptional user experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </button>
          <button className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            <Phone className="w-5 h-5 mr-2" />
            Call Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://wa.me/923411934711"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-asad-ishtiaq-bba065248/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ranaasadishtiaq@gmail.com"
            className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;