import React from 'react';
import { GithubLogo, Globe } from '@phosphor-icons/react';
import { SkillIcons } from '../../../assets/Skills';

const iconMap = Object.keys(SkillIcons).reduce((acc, key) => {
  acc[key.toLowerCase()] = key;
  return acc;
}, {});

const getSkillIcon = (name) => {
  const realKey = iconMap[name.toLowerCase()];
  return realKey ? SkillIcons[realKey] : null;
};

const ProjectCard = ({
  title,
  tech = [],
  description,
  image,
  codeUrl,
  demoUrl,
  tags = [],
  variant = 'full', // 'full' or 'compact'
}) => {
  const isFull = variant === 'full';

  return (
    <div
      className={`rounded-4xl overflow-hidden transition duration-300 flex flex-col shadow-md
       dark:bg-neutral-900
        ${isFull ? 'hover:shadow-xl' : 'hover:shadow-lg'}
      `}
    >
      <img
        src={image}
        alt={title}
        className={`w-full object-cover ${isFull ? 'h-48' : 'h-40'}`}
      />

      <div className={`flex-1 flex flex-col ${isFull ? 'p-4 sm:p-5' : 'p-3'}`}>
        <h3
          className={`font-semibold mb-2 text-neutral-900 dark:text-neutral-100 ${isFull ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
        >
          {title}
        </h3>

        {/* Tech Icons */}
        <div className="flex space-x-2 mb-3">
          {tech.map((techName, idx) => {
            const icon = getSkillIcon(techName);
            return icon ? (
              <img
                key={idx}
                src={icon}
                alt={techName}
                className={`object-contain ${isFull ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4 sm:w-5 sm:h-5'
                  }`}
              />
            ) : (
              <span key={idx} className="text-xs text-gray-400 dark:text-gray-500">{techName}</span>
            );
          })}
        </div>
        
        {/* Description */}
        <p
          className={`text-gray-600 dark:text-gray-300 flex-1 ${isFull ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
            }`}
        >
          {description}
        </p>

        {/* Tags (only for full) */}
        {isFull && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-neutral-700 text-xs sm:text-sm text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-4 flex space-x-3">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-white bg-neutral-800 hover:bg-neutral-900 transition ${isFull ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                }`}
            >
              <span>Code</span>
              <GithubLogo size={18} weight="fill" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition ${isFull ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                }`}
            >
              <span>Demo</span>
              <Globe size={18} weight="fill" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;