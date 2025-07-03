import React, { useEffect, useState } from 'react';
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  CodepenLogo,
  RedditLogo,
  TwitterLogo,
  InstagramLogo,
  ArrowUpRight,
} from '@phosphor-icons/react';

const iconMap = {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  StackOverflowLogo,
  CodepenLogo,
  RedditLogo,
  TwitterLogo,
  InstagramLogo,
};

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/princepatel4423d/portfolio-data/main/social-links.json'
        );
        const data = await res.json();
        setSocialLinks(data);
      } catch (error) {
        console.error('Failed to fetch social links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="py-10 space-y-4">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon];

        return (
          <div
            key={index}
            className="flex items-center justify-between border-b py-4 gap-4 flex-wrap sm:flex-nowrap"
          >
            {/* Left: Icon + Name */}
            <div className="flex items-center gap-2 text-base sm:text-base font-medium">
              {Icon ? (
                <Icon size={24} weight="regular" />
              ) : (
                <span className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-900" />
              )}
              <span>{link.name}</span>
            </div>

            {/* Middle: Username */}
            <div className="hidden md:block text-sm sm:text-base">
              {link.username}
            </div>

            {/* Right: Action */}
            <div className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {link.action}
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;