import React from 'react';
import { MapPin, Calendar, GraduationCap, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const facts = [
    { icon: MapPin, label: 'Location', value: portfolioData.personal.location },
    { icon: Calendar, label: 'Experience', value: portfolioData.personal.experience },
    { icon: GraduationCap, label: 'Education', value: portfolioData.personal.education },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Summary */}
            <div className="lg:order-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Professional Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Experience</span>
                    <span className="text-gray-900 dark:text-white">{portfolioData.personal.experience}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Location</span>
                    <span className="text-gray-900 dark:text-white">{portfolioData.personal.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Education</span>
                    <span className="text-gray-900 dark:text-white">{portfolioData.personal.education}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 lg:order-2">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {portfolioData.personal.bio}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in writing clean, maintainable code and creating solutions that make a real difference.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg transition-all duration-300">
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;