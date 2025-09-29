import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Database, Globe, Users, Zap, Shield } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const caseStudies = [
    {
      id: 'cercles',
      title: 'Cercles – Travel Booking Platform',
      subtitle: 'Full-Stack Development Case Study',
      overview: 'A comprehensive travel booking platform enabling users to search, book, and manage accommodations with real-time features.',
      challenge: 'Building a scalable platform that handles real-time bookings, secure payments, and complex user interactions between hosts and guests.',
      technologies: ['NestJS', 'MySQL', 'Stripe', 'WebSocket', 'AWS S3', 'React.js', 'TypeScript'],
      sections: [
        {
          id: 'problem',
          title: 'Problem Statement',
          icon: <Users className="w-5 h-5 text-red-500" />,
          content: `The travel industry needed a modern booking platform that could handle:
          • Real-time availability updates across multiple properties
          • Secure payment processing with multiple currencies
          • Interactive communication between hosts and guests
          • File management for property images and documents
          • Complex search and filtering capabilities
          • Mobile-responsive design for travelers on-the-go`
        },
        {
          id: 'solution',
          title: 'Technical Solution',
          icon: <Code className="w-5 h-5 text-blue-500" />,
          content: `Architecture & Implementation:
          
          Backend (NestJS):
          • Modular architecture with separate modules for bookings, users, properties, and payments
          • JWT-based authentication with role-based access control
          • Real-time WebSocket connections for instant booking updates
          • Stripe integration for secure payment processing
          • AWS S3 integration for scalable file storage
          
          Database Design (MySQL):
          • Normalized database schema with proper indexing
          • Optimized queries for complex search operations
          • Transaction management for booking consistency
          • Audit trails for all critical operations
          
          Frontend Integration:
          • RESTful API design with comprehensive documentation
          • Real-time updates using WebSocket connections
          • Responsive design patterns for cross-device compatibility`
        },
        {
          id: 'challenges',
          title: 'Technical Challenges & Solutions',
          icon: <Zap className="w-5 h-5 text-yellow-500" />,
          content: `Key Challenges Solved:
          
          1. Real-time Booking Conflicts:
          • Implemented optimistic locking to prevent double bookings
          • Used WebSocket for instant availability updates
          • Created booking queue system for high-demand properties
          
          2. Payment Security:
          • Integrated Stripe with webhook validation
          • Implemented secure payment flow with 3D Secure
          • Added comprehensive error handling and retry logic
          
          3. File Upload Performance:
          • Direct-to-S3 uploads to reduce server load
          • Image optimization and multiple size variants
          • Progress tracking for large file uploads
          
          4. Search Performance:
          • Implemented database indexing strategy
          • Added caching layer for frequently searched data
          • Optimized complex queries with proper joins`
        },
        {
          id: 'results',
          title: 'Results & Impact',
          icon: <Database className="w-5 h-5 text-green-500" />,
          content: `Measurable Outcomes:
          
          Performance Metrics:
          • 99.9% uptime achieved through robust error handling
          • Sub-200ms API response times for search queries
          • Real-time updates with <50ms latency
          • Successfully processed 1000+ concurrent users
          
          Business Impact:
          • Reduced booking conflicts by 95% through real-time updates
          • Improved user experience with instant feedback
          • Streamlined payment processing with 99.8% success rate
          • Enhanced security with zero payment-related incidents
          
          Technical Achievements:
          • Scalable architecture supporting future growth
          • Comprehensive API documentation for team collaboration
          • Automated testing coverage of 85%
          • Clean, maintainable codebase following best practices`
        }
      ]
    },
    {
      id: 'wepick',
      title: 'WePick – Smart Parcel Locker System',
      subtitle: 'MVP Development Case Study',
      overview: 'An innovative last-mile delivery solution using smart lockers on public transport to reduce urban congestion.',
      challenge: 'Creating an MVP that integrates with existing transport infrastructure and third-party APIs while providing seamless user experience.',
      technologies: ['Flutter', 'Node.js', 'BlueBits API', 'Firebase', 'MongoDB', 'WebSocket'],
      sections: [
        {
          id: 'problem',
          title: 'Problem Statement',
          icon: <Users className="w-5 h-5 text-red-500" />,
          content: `Urban Delivery Challenges:
          • Last-mile delivery causing traffic congestion
          • High delivery costs for retailers
          • Environmental impact of delivery vehicles
          • Missed deliveries due to customer unavailability
          • Need for secure, accessible pickup points
          • Integration with existing public transport infrastructure`
        },
        {
          id: 'solution',
          title: 'Innovative Solution',
          icon: <Globe className="w-5 h-5 text-blue-500" />,
          content: `Smart Locker System Architecture:
          
          Mobile Applications (Flutter):
          • Cross-platform apps for customers and retailers
          • Real-time parcel tracking and notifications
          • QR code generation for secure locker access
          • Route optimization for pickup locations
          
          Backend System (Node.js):
          • RESTful API for all system operations
          • Integration with BlueBits API for locker control
          • Real-time tracking and status updates
          • Role-based access control for different user types
          
          Third-party Integrations:
          • BlueBits API for smart locker operations
          • Firebase for push notifications
          • Payment gateway integration
          • Transport schedule APIs for route planning`
        },
        {
          id: 'challenges',
          title: 'Development Challenges',
          icon: <Shield className="w-5 h-5 text-yellow-500" />,
          content: `Complex Integration Challenges:
          
          1. Hardware Integration:
          • Reliable communication with smart lockers
          • Handling network connectivity issues
          • Synchronizing locker status across platforms
          • Implementing failsafe mechanisms
          
          2. Multi-platform Development:
          • Consistent UI/UX across iOS, Android, and Web
          • Shared business logic between platforms
          • Platform-specific optimizations
          • Cross-platform testing strategies
          
          3. Real-time Operations:
          • Live tracking of parcels and transport
          • Instant notifications for all stakeholders
          • Synchronization between multiple systems
          • Handling offline scenarios
          
          4. Security & Reliability:
          • Secure locker access codes
          • Data encryption for sensitive information
          • Audit trails for all operations
          • Backup systems for critical failures`
        },
        {
          id: 'results',
          title: 'MVP Success Metrics',
          icon: <Zap className="w-5 h-5 text-green-500" />,
          content: `Proof of Concept Results:
          
          Technical Achievements:
          • Successfully integrated with BlueBits locker system
          • Achieved 99.5% locker operation success rate
          • Real-time notifications with <30 second delivery
          • Cross-platform compatibility across all target devices
          
          User Experience:
          • Intuitive interface with minimal learning curve
          • Average pickup time reduced to under 2 minutes
          • 95% user satisfaction in beta testing
          • Seamless onboarding process for new users
          
          Business Validation:
          • Demonstrated 40% reduction in delivery costs
          • Proved concept viability for scaling
          • Established partnerships with transport operators
          • Created foundation for full product development
          
          Environmental Impact:
          • Projected 30% reduction in delivery vehicle emissions
          • Optimized route planning reducing travel distances
          • Leveraged existing public transport infrastructure`
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Development Case Studies
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Deep dive into my development process, technical decisions, and problem-solving approach
            for complex software projects.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12">
              {/* Case Study Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {study.title}
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                  {study.subtitle}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  {study.overview}
                </p>
                
                {/* Technologies Used */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Challenge Statement */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-left">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-orange-500 mr-3" />
                    The Challenge
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-6">
                {study.sections.map((section) => (
                  <div key={section.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleSection(`${study.id}-${section.id}`)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        {section.icon}
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                          {section.title}
                        </h4>
                      </div>
                      {expandedSections[`${study.id}-${section.id}`] ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedSections[`${study.id}-${section.id}`] && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                          <pre className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
                            {section.content}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Process Overview */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Development Process
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to building scalable, maintainable software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analysis & Planning',
                description: 'Requirements gathering, technical feasibility, and architecture design',
                icon: <Users className="w-8 h-8 text-blue-500" />
              },
              {
                step: '02',
                title: 'Development & Testing',
                description: 'Agile development with continuous testing and code reviews',
                icon: <Code className="w-8 h-8 text-green-500" />
              },
              {
                step: '03',
                title: 'Integration & Deployment',
                description: 'CI/CD pipelines, staging environments, and production deployment',
                icon: <Globe className="w-8 h-8 text-purple-500" />
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                description: 'Performance monitoring, user feedback, and continuous improvement',
                icon: <Zap className="w-8 h-8 text-orange-500" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {process.icon}
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;