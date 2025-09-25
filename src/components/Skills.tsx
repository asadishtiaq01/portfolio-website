import React from 'react';
import { Code, Globe, Database, Cloud, Cpu, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      color: 'orange',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      color: 'blue',
      skills: ['React.js', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'Ant Design']
    },
    {
      title: 'Backend',
      icon: <Database className="w-8 h-8 text-green-500" />,
      color: 'green',
      skills: ['Node.js', 'NestJS', 'Express.js', 'GraphQL', 'RESTful APIs', 'WebSockets']
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      color: 'purple',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
      color: 'indigo',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Firebase', 'Vercel']
    },
    {
      title: 'APIs & Tools',
      icon: <Settings className="w-8 h-8 text-red-500" />,
      color: 'red',
      skills: ['Stripe', 'Twilio', 'SendGrid', 'PostHog', 'Swagger', 'Git']
    }
  ];

  const coreCompetencies = [
    { name: 'Full-Stack Development', percentage: 95, color: 'bg-blue-500' },
    { name: 'Cloud Deployment', percentage: 80, color: 'bg-purple-500' },
    { name: 'React.js & Node.js', percentage: 90, color: 'bg-green-500' },
    { name: 'API Development', percentage: 88, color: 'bg-orange-500' },
    { name: 'Database Design', percentage: 85, color: 'bg-purple-500' },
    { name: 'Team Leadership', percentage: 82, color: 'bg-red-500' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Technologies & Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to
            build modern, scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {competency.name}
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {competency.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`${competency.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${competency.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;