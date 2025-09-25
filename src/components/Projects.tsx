import React from 'react';
import { Database, Globe, Smartphone, Shield, Search, BarChart3, Users, Upload, Package, Lock, Bell } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cercles – Travel Booking Platform',
      icon: <Database className="w-12 h-12 text-blue-500" />,
      technologies: ['NestJS', 'MySQL', 'Stripe', 'WebSocket', 'AWS S3'],
      description: 'A comprehensive travel booking platform that enables users to search, book, and manage travel accommodations. Features real-time availability, secure payment processing, and interactive communication between hosts and guests.',
      features: [
        { icon: <Globe className="w-4 h-4 text-blue-500" />, text: 'Real-time booking system with WebSocket integration' },
        { icon: <Shield className="w-4 h-4 text-blue-500" />, text: 'Secure payment processing with Stripe' },
        { icon: <Upload className="w-4 h-4 text-blue-500" />, text: 'File upload and management with AWS S3' },
        { icon: <Search className="w-4 h-4 text-blue-500" />, text: 'Advanced search and filtering capabilities' },
        { icon: <Users className="w-4 h-4 text-blue-500" />, text: 'User authentication and authorization' }
      ]
    },
    {
    title: 'WePick – Smart Parcel Locker System',
    icon: <Package className="w-12 h-12 text-green-500" />,
    technologies: ['Flutter', 'Nodejs', 'BlueBits API', 'Firebase (Notifications)'],
    description:
      'An MVP system enabling customers to receive parcels from retailers using smart lockers installed on public transport (buses). The solution integrates with BlueBits APIs to provide real-time tracking, locker operations, and notifications for both retailers and customers. It reduces congestion and emissions by leveraging public transport infrastructure for last-mile deliveries.',
    features: [
      { icon: <Users className="w-4 h-4 text-green-500" />, text: 'Role-based access control for Customers and Retailers' },
      { icon: <Package className="w-4 h-4 text-green-500" />, text: 'Parcel creation and real-time tracking with BlueBits API' },
      { icon: <Lock className="w-4 h-4 text-green-500" />, text: 'Locker integration with unique codes for secure parcel pickup' },
      { icon: <Bell className="w-4 h-4 text-green-500" />, text: 'Push notifications for parcel availability and delivery updates' },
      { icon: <BarChart3 className="w-4 h-4 text-green-500" />, text: 'Reports and analytics for retailers and admins' },
      { icon: <Smartphone className="w-4 h-4 text-green-500" />, text: 'Cross-platform apps (iOS, Android, Web) with CMS support' }
    ]
  }
    
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the key projects I've worked on, showcasing my expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                {/* Project Icon */}
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  {project.icon}
                </div>

                <div className="flex-1">
                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature.text}
                          </span>
                        </div>
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

export default Projects;