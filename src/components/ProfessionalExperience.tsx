import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      position: 'Software Engineer',
      company: 'TxLabz',
      duration: 'January 2025 – Present',
      location: 'Lahore, Pakistan',
      current: true,
      responsibilities: [
        'Lead development of scalable web applications using React.js, Node.js, and NestJS',
        'Architect and implement microservices solutions for improved system performance',
        'Integrate third-party APIs including Stripe, Twilio, and SendGrid for enhanced functionality',
        'Optimize database performance and implement efficient data structures using MongoDB and PostgreSQL',
        'Collaborate with cross-functional teams to deliver high-quality software solutions',
        'Mentor junior developers and conduct code reviews to maintain code quality standards'
      ],
      technologies: ['React.js', 'Node.js', 'NestJS', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      position: 'Associate Software Engineer',
      company: 'SmartFun Studio',
      duration: 'March 2024 – January 2025',
      location: 'Lahore, Pakistan',
      current: false,
      responsibilities: [
        'Developed and maintained multiple web applications using modern JavaScript frameworks',
        'Implemented responsive UI components and ensured cross-browser compatibility',
        'Built RESTful APIs and integrated with various third-party services',
        'Participated in agile development processes and sprint planning sessions',
        'Collaborated with designers to translate wireframes into functional user interfaces',
        'Performed testing and debugging to ensure optimal application performance'
      ],
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'Git', 'Azure']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            My professional journey spans over 2 years of software development, working
            with diverse teams and technologies to build impactful solutions.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                {/* Icon */}
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Position and Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                        {experience.company}
                      </h4>
                    </div>
                    {experience.current && (
                      <div className="mt-2 sm:mt-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Current Position
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-8 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {experience.location}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;