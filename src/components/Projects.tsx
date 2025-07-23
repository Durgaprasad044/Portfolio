import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(portfolioData.projects.flatMap(project => project.technologies))
  );
  const filters = ['All', ...allTechnologies];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => 
        project.technologies.includes(selectedFilter)
      );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my technical skills and creative problem-solving abilities.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
              <Filter size={20} />
              <span className="font-medium">Filter by technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  hasIntersected ? 'animate-fade-in-up' : ''
                }`}
                style={{
                  animationDelay: hasIntersected ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  {project.featured && (
                    <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded text-center flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded text-center flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found for the selected technology. Try a different filter!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;