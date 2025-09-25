import React from 'react';

const ProfessionalJourney: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Professional Journey
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed mb-6">
            My journey in software development began with a strong foundation in computer science, which I've built upon through hands-on experience in various domains including travel booking platforms, learning management systems, and educational platforms.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I have extensive experience in developing <span className="font-semibold text-gray-900 dark:text-white">RESTful APIs</span> and implementing <span className="font-semibold text-gray-900 dark:text-white">GraphQL</span> solutions, along with building <span className="font-semibold text-gray-900 dark:text-white">microservices</span> architectures that scale efficiently. My expertise extends to cloud deployments using <span className="font-semibold text-gray-900 dark:text-white">AWS</span> and <span className="font-semibold text-gray-900 dark:text-white">Azure</span>, and I'm well-versed in setting up <span className="font-semibold text-gray-900 dark:text-white">CI/CD pipelines</span> for automated testing and deployment.
          </p>

          <p className="text-lg leading-relaxed">
            I'm passionate about writing <span className="font-semibold text-gray-900 dark:text-white">clean, maintainable code</span> and believe in the power of effective collaboration. I enjoy working in cross-functional teams where I can contribute not just technically, but also in planning and architectural decisions that drive project success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;