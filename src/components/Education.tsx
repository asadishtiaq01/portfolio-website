import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            My academic foundation in computer science has provided me with the
            theoretical knowledge and practical skills essential for software development.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            {/* Icon */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-1">
              {/* Degree Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor of Science in Computer Science
              </h3>
              
              {/* University */}
              <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                Government College University Faisalabad
              </h4>

              {/* Duration and Location */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-8 text-gray-600 dark:text-gray-400">
                <div className="flex items-center mb-2 sm:mb-0">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  2017 – 2021
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Faisalabad, Pakistan
                </div>
              </div>

              {/* Core Subjects and Key Achievements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Core Subjects */}
                <div>
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Core Subjects
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Object-Oriented Programming
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Database Management Systems
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Software Engineering
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Computer Networks
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Operating Systems
                    </li>
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Strong foundation in programming principles
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Comprehensive understanding of software development lifecycle
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Practical experience with various programming languages
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Team-based project development experience
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Problem-solving and analytical thinking skills
                    </li>
                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Research and technical writing capabilities
                    </li>
                  </ul>
                </div>
              </div>

              {/* Academic Focus */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-gray-900 dark:text-white">Academic Focus:</span> My computer science education provided a solid foundation in programming fundamentals, software engineering principles, and system design. The curriculum emphasized both theoretical concepts and practical application, preparing me for real-world software development challenges. Key projects included building full-stack applications, implementing algorithms, and working on team-based software development projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Continuous Learning
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Beyond formal education, I continuously enhance my skills through online courses, technical documentation, and hands-on projects. I stay updated with the latest technologies and best practices in software development, ensuring my skills remain current with industry standards and emerging trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;