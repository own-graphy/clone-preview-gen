import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';
import { dummyScrollTo } from '../utils/scrollHelper';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'print', name: 'Print' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Nova Finance App',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['UI/UX', 'Mobile App']
    },
    {
      id: 2,
      title: 'Eco Branding Package',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1634942537034-a4f9ffe6e3c5',
      tags: ['Branding', 'Logo', 'Identity']
    },
    {
      id: 3,
      title: 'Foodie Website Redesign',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555596898-336155c88b2c',
      tags: ['Web Design', 'E-commerce']
    },
    {
      id: 4,
      title: 'Luxury Product Catalog',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1',
      tags: ['Print Design', 'Catalog']
    },
    {
      id: 5,
      title: 'Zenith Dashboard',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      tags: ['UI/UX', 'Dashboard']
    },
    {
      id: 6,
      title: 'Craft Brewery Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64',
      tags: ['Branding', 'Packaging']
    },
    {
      id: 7,
      title: 'Travel Blog Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
      tags: ['Web Design', 'Blog']
    },
    {
      id: 8,
      title: 'Annual Report Design',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc',
      tags: ['Print Design', 'Editorial']
    },
    {
      id: 9,
      title: 'Health & Fitness App',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1540308990836-5a7fd1bf587d',
      tags: ['UI/UX', 'Mobile App']
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={dummyScrollTo} />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-lg text-gray-600">
                Explore our latest work and see how we've helped our clients achieve their goals.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    filter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 text-center p-8 md:p-12 bg-gray-50 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                We'd love to hear about your project and see how we can help bring your vision to life.
              </p>
              <a href="/contact" className="inline-flex items-center bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-default">
                Start a Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    tags: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/007AFF/FFFFFF?text=Project';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <a href="#" className="bg-white text-gray-900 font-medium px-4 py-2 rounded-full flex items-center hover:bg-gray-100 transition duration-300">
            View Project <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
