import { useState } from 'react';
import { FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { categories, projects } from '../data/proyects';



const ProjectList = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  return (
    <section className=" py-16 max-w-5xl mx-auto my-20">
   <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
<FaProjectDiagram className="w-5 h-5 " /> Projects
</h2>



<div className="flex justify-items-start mb-8" id="projects">
  <div className="bg-gray-800 rounded-lg p-1 shadow-lg">
    <div className="flex">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 first:rounded-l-md last:rounded-r-md ${
            selected === cat
              ? 'bg-gray-600 text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
</div>

      <div className="flex flex-col gap-12">
        {filtered.map((project, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition ">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.github.map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition"
                    >
                      <FaGithub className="text-lg" />
                      {repo.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full md:w-64 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;