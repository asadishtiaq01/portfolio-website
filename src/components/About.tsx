import React from 'react';
import { Code, Database, Cloud, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Frontend Development',
      description: 'Expert in React.js, TypeScript, and modern frontend frameworks for building responsive user interfaces.'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Backend Systems',
      description: 'Proficient in Node.js, NestJS, RESTful APIs, GraphQL, and microservices architecture.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud & DevOps',
      description: 'Experience with AWS, Azure, Docker, and CI/CD pipelines for scalable deployments.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Team Collaboration',
      description: 'Strong advocate for clean code practices and effective cross-functional teamwork.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate software engineer with over 2 years of experience in building scalable web applications and systems. I specialize in full-stack development with a focus on modern technologies and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;