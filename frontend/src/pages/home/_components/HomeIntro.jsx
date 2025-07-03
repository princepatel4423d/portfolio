import React, { useEffect, useState } from 'react';
import {
  Hand,
  Coffee,
  Star,
  GitFork,
  DownloadSimple,
  ArrowUpRight,
  GithubLogo,
} from '@phosphor-icons/react';

import { SkillIcons } from '@/assets/Skills';
import CV from './cv-princepatel.pdf'

const HomeIntro = () => {
  const username = 'princepatel4423d';
  const [totals, setTotals] = useState({ stars: 0, forks: 0 });

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await res.json();

        const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

        setTotals({ stars, forks });
      } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
      }
    };

    fetchTotals();
  }, []);

  return (
    <div className="flex flex-col py-12 gap-10 md:flex-row md:gap-3">
      <div className="flex-1 space-y-4">
        <h2 className="text-xs opacity-70">Full-Stack Developer</h2>

        <p className="flex items-center gap-2">
          <Hand size={18} />
          <span>Hello, welcome to my little corner on the web!</span>
        </p>

        <p>
          I'm a self-taught code solutions programmer. I love programming and
          I try to use <strong>software architecture</strong>, <strong>clean</strong>, and <strong>maintainable code</strong>.
          I like to work with technologies from the
          <img src={SkillIcons.JavaScript} className="inline h-5 mx-1" alt="JavaScript" title="JavaScript" />,
          <img src={SkillIcons.React} className="inline h-5 mx-1" alt="React" title="React" />,
          <img src={SkillIcons.Python} className="inline h-5 mx-1" alt="Python" title="Python" /> and
          <img src={SkillIcons.Rust} className="inline h-5 mx-1" alt="Rust" title="Rust" /> ecosystem.
        </p>

        <p>
          I'm always learning. Here you can find the projects I'm working on and
          details about my journey and skills. I’m always looking to improve, and
          you can follow my progress and studies.
        </p>

        <p>
          See more <a href="/about" className="underline">about me</a> or check out <a href="/projects" className="underline">my projects</a> ;)
        </p>

        <p>
          You might enjoy reading my <a href="/blog" className="underline">blog posts</a> or my
          <a href="/blog/til" className="underline ml-1">"Today I Learn"</a> notes!
        </p>

        <p>
          I hope I can help you. I'd love to hear your ideas and contribute whenever possible.
        </p>
      </div>

      <div className="relative">
        <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
          <div className="w-full space-y-4 rounded-xl border p-5 text-sm shadow-md">
            <header className="flex justify-between gap-3">
              <div className="flex items-center gap-1">
                <Coffee size={18} />
                <span>Currently making...</span>
              </div>
              <a href="/projects" className="opacity-80 hover:opacity-100 underline">see projects</a>
            </header>

            <div className="space-y-3 rounded-xl border p-2">
              <div>
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <div className="font-medium">princep4423d</div>
                    <div className="text-xs opacity-80">
                      Today is: <span>
                        {new Date().toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>

                    </div>
                  </div>
                  <div className="inline-flex items-center text-base">
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    >
                      <GithubLogo size={18} />
                    </a>
                  </div>

                </div>
              </div>
              <div>🏡 My corner of internet, a.k.a Personal Homepage & Portfolio.</div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={18} />
                  <span>{totals.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={18} />
                  <span>{totals.forks}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:hover:bg-neutral-400 dark:hover:text-black"
                target="_blank"
                href={CV}
              >
                Download CV <DownloadSimple size={16} />
              </a>
              <a
                className="flex items-end justify-center rounded-xl p-3 leading-none underline opacity-70 hover:opacity-100"
                target="_blank"
                rel="noreferrer"
                href={CV}
              >
                <span>read.cv</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;