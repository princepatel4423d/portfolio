import React, { useEffect, useState } from 'react';
import ProjectCard from './_components/ProjectCard';

const Project = () => {
  const [featured, setFeatured] = useState([]);
  const [all, setAll] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/princepatel4423d/portfolio-data/refs/heads/main/projects.json') // update with your actual URL
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.featured || []);
        setAll(data.all || []);
      })
      .catch((err) => {
        console.error("Failed to load project data:", err);
      });
  }, []);

  return (
    <section className="w-full py-10">
      {/* Featured Projects */}
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            variant="full"
          />
        ))}
      </div>

      {/* All Projects */}
      <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Other Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {all.map((project, index) => (
          <ProjectCard
            key={`all-${index}`}
            {...project}
            variant="compact"
          />
        ))}
      </div>
    </section>
  );
};

export default Project;