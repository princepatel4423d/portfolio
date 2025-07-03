import React, { useEffect, useState } from 'react';
import { Briefcase } from '@phosphor-icons/react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/princepatel4423d/portfolio-data/refs/heads/main/experience.json'
        );
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error('Failed to fetch experience.json:', err);
      }
    };

    fetchExperience();
  }, []);

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Column - Title */}
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase size={28} /> Experience
          </h2>
        </div>

        {/* Right Column - Experience List */}
        <div className="md:w-3/4 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-lg font-bold">
                {exp.title}{' '}
                <span className="font-normal">
                  at{' '}
                  <a
                    href={exp.link || '#'}
                    className="text-blue-600 dark:text-blue-400 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {exp.company}
                  </a>
                </span>
              </h3>
              <p className="text-sm md:text-base">
                {exp.duration} <span className="italic">({exp.length})</span>
              </p>
              <p className="mt-2 text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;