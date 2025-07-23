import React from 'react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const skillCategories = [
    { name: 'Frontend', skills: portfolioData.skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', skills: portfolioData.skills.backend, color: 'from-green-500 to-emerald-500' },
    { name: 'Tools & DevOps', skills: portfolioData.skills.tools, color: 'from-purple-500 to-pink-500' },
    { name: 'Soft Skills', skills: portfolioData.skills.soft, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and professional competencies.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-8 ${
                  hasIntersected ? 'animate-fade-in-up' : ''
                }`}
                style={{
                  animationDelay: hasIntersected ? `${categoryIndex * 200}ms` : '0ms'
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-8 bg-gray-900 dark:bg-white"></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex items-center justify-center">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
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