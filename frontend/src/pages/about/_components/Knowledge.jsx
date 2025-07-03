import React, { useEffect, useState } from 'react';
import {
  Brain,
  CaretDown,
  CaretUp,
  SlidersHorizontal,
} from '@phosphor-icons/react';
import { SkillIcons } from '../../../assets/Skills';

const Knowledge = () => {
  const [openCategory, setOpenCategory] = useState('Programming languages');
  const [showCaptions, setShowCaptions] = useState(false);
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/princepatel4423d/portfolio-data/refs/heads/main/skill-knowledge.json'
        );
        const data = await res.json();
        setSkillsData(data);
      } catch (err) {
        console.error('Failed to fetch skill-knowledge.json:', err);
      }
    };

    fetchSkills();
  }, []);

  const toggleCategory = (category) =>
    setOpenCategory(openCategory === category ? '' : category);

  return (
    <div className="py-10 transition-all duration-300">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Brain size={28} /> Knowledge
      </h2>

      {/* Skill captions toggle */}
      <div className="border-b mb-6 pb-4">
        <button
          className="flex items-center gap-2 text-sm font-medium"
        >
          <span className="inline-flex items-center border rounded px-2 py-0.5 text-xs transition-all duration-200">
            Skill captions
          </span>
          <SlidersHorizontal size={16} />
        </button>
          <div className="mt-4 text-sm transition-opacity duration-300 opacity-100">
            These icons represent languages and tools I’ve worked with. Click on a section to explore.
          </div>
      </div>

      {/* Skill categories */}
      {Object.entries(skillsData).map(([category, items], index) => (
        <div key={category} className="mb-6 transition-all duration-300">
          {/* Toggle category */}
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex justify-between items-center text-left text-md font-medium cursor-pointer"
          >
            <span>{category}</span>
            <span
              className={`transition-transform duration-300 ${
                openCategory === category ? 'rotate-180' : ''
              }`}
            >
              <CaretDown size={20} />
            </span>
          </button>

          {/* Render skills */}
          {openCategory === category && (
            <div className="mt-4 flex flex-wrap gap-3 animate-fade-in">
              {items.map((skill) => {
                const Icon = SkillIcons[skill.icon];
                return (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm shadow-sm transition-all duration-200 transform ${
                      skill.faded ? 'opacity-50 hover:opacity-90' : 'hover:opacity-100'
                    }`}
                  >
                    {Icon ? (
                      <img src={Icon} alt={skill.name} className="w-5 h-5" />
                    ) : (
                      <span className="w-5 h-5 bg-gray-100 rounded-full" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Divider */}
          {index !== Object.keys(skillsData).length - 1 && (
            <hr className="mt-6 border-t" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Knowledge;