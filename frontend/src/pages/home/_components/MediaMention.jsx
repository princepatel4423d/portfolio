import React, { useEffect, useState } from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  RedditLogo,
  CodepenLogo,
  ArrowUpRight,
  Book,
  Wrench,
} from '@phosphor-icons/react';
import { SkillIcons } from '../../../assets/Skills';

import Octocat from './octocat.jpg';
import Song from './song.jpg';
import Letterboxd from './letterboxd.webp';
import api from '@/utils/api';

const MediaMention = () => {

  // Github Stats
  const username = 'princepatel4423d'
  const [stats, setStats] = useState({ stars: 0, followers: 0, repos: 0 });
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userRes.json();

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const repos = await reposRes.json();
      const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

      setStats({ stars, followers: userData.followers, repos: repos.length });
    };

    fetchStats();
  }, [username]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await api.get('/blogs/all');
        const sorted = res.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestBlog(sorted[0]);
      } catch (err) {
        console.error('Failed to fetch blog', err);
      }
    };

    fetchLatest();
  }, []);

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
      : 'Unknown date';

  return (
    <div className="py-12">
      <div className="content-container grid grid-cols-3 gap-3 md:grid-cols-6">
        {/* GitHub Section */}
        <div className="col-span-3">
          <a
            href="https://github.com/princepatel4423d"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full w-full flex-col justify-between gap-3 overflow-hidden rounded-xl text-white transition-all hover:scale-95 duration-500"
          >
            <img
              src={Octocat}
              alt="GitHub Background"
              className="absolute inset-0 h-full w-full object-cover brightness-[0.7]"
            />
            <div className="z-20 px-4 pt-6 flex justify-between">
              <GithubLogo size={24} />
            </div>
            <div className="z-20 space-y-0.5 p-4 pb-6">
              <div className="font-semibold">GitHub</div>
              <div className="text-sm">My experiments (aka projects)</div>
            </div>
          </a>
        </div>

        {/* GitHub Stats */}
        <div className="col-span-2 md:col-span-2 relative h-full w-full overflow-hidden rounded-xl bg-[#eae2e2] dark:bg-[#0d1117] p-3 flex flex-col justify-end">
          <img
            src="https://ghchart.rshah.org/princepatel4423d"
            alt="GitHub contributions"
            className="w-full max-w-xl object-cover h-full mx-auto"
          />
          <div className="flex gap-x-6 text-sm font-normal justify-between">
            <span>Stars: {stats.stars}</span>
            <span>Followers: {stats.followers}</span>
            <span>Repos: {stats.repos}</span>
          </div>
        </div>

        {/* Music Card */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://last.fm/user/princep4423d"
          className="relative col-span-1 md:col-span-1 flex items-center justify-center overflow-hidden rounded-xl bg-black text-white h-36 hover:scale-95 duration-500"
        >
          <div className="absolute bottom-2 right-4 z-10 text-right">
            <div className="text-base font-bold truncate">Alone (Vers...)</div>
            <div className="text-sm">Top listened this month</div>
          </div>
          <img
            src={Song}
            alt="Spinning Album"
            className="absolute -bottom-12 object-cover -left-16 w-[200px] h-[200px] rounded-full"
          />
        </a>
      </div>

      {/* Social + Skills */}
      <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
        <div className="col-span-3 flex flex-col gap-3">
          {/* Social Grid */}
          <div className="flex gap-3">
            <div className="w-24">
              <a
                href="https://letterboxd.com/princep4423d/"
                target="_blank"
                className="relative h-full flex flex-col justify-between rounded-xl bg-[#131618] p-3 hover:scale-95 duration-500"
              >
                <div className="flex justify-end text-lg text-white">
                  <ArrowUpRight weight="bold" />
                </div>
                <img src={Letterboxd} alt="Letterboxd" className="w-full" />
              </a>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-2">
              <a
                href="https://linkedin.com/in/princepatel4423d"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white h-[4.125rem] hover:scale-95 duration-500"
              >
                <LinkedinLogo size={20} />
                <p className="text-xs">serious stuff</p>
              </a>
              <a
                href="https://x.com/princep4423d"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-lg bg-[#1c1d1f] text-white h-[4.125rem] hover:scale-95 duration-500"
              >
                <TwitterLogo size={20} />
                <p className="text-xs text-white/70">share memes ;)</p>
              </a>
              <a
                href="https://www.reddit.com/user/princep4423d"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-lg bg-[#FF4500] text-white h-[4.125rem] hover:scale-95 duration-500"
              >
                <RedditLogo size={20} />
                <p className="text-xs">"What is this error?"</p>
              </a>
              <a
                href="https://codepen.io/princepatel4423d"
                target="_blank"
                className="flex flex-col items-center justify-center rounded-lg bg-black text-white h-[4.125rem] hover:scale-95 duration-500"
              >
                <CodepenLogo size={20} />
                <p className="text-xs">web drafts</p>
              </a>
            </div>
          </div>

          {/* Skill Marquee */}
          <div className="space-y-4">
            {/* Left to Right */}
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-left">
                {[...Object.entries(SkillIcons), ...Object.entries(SkillIcons)].map(([name, icon], i) => (
                  <img
                    key={`left-${name}-${i}`}
                    src={icon}
                    alt={name}
                    title={name}
                    className="skill-icon"
                  />
                ))}
              </div>
            </div>

            {/* Right to Left */}
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-right">
                {[...Object.entries(SkillIcons), ...Object.entries(SkillIcons)].map(([name, icon], i) => (
                  <img
                    key={`right-${name}-${i}`}
                    src={icon}
                    alt={name}
                    title={name}
                    className="skill-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Discord and Latest Post */}
        <div className="col-span-3 mt-4 md:mt-0 md:ml-3 space-y-3">
          <div className="flex gap-3 h-40">
            <div className="flex h-auto items-center justify-center rounded-xl p-2 text-white bg-gray-950 relative overflow-hidden">
              <div className="-rotate-12 text-center">
                <p className="text-xl font-semibold text-white">Discord</p>
                <p className="text-sm text-white">(@princep4423d)</p>
              </div>
            </div>

            {/* Latest Blog */}
            {latestBlog ? (
              <a
                href={`/blog/post/${latestBlog.slug}`}
                className="flex flex-1 flex-col rounded-xl border-2 justify-between p-4 hover:scale-95 duration-500"
              >
                <span className="text-sm md:text-base lg:text-lg">Latest post</span>
                <hr className="my-1 border-gray-300" />
                <span className="text-sm md:text-xs lg:text-lg line-clamp-2">{latestBlog.title}</span>
                <hr className="my-1 border-gray-300" />
                <span className="text-sm md:text-sm lg:text-base opacity-70">
                  {formatDate(latestBlog.date)}
                </span>
              </a>
            ) : (
              <p className="text-sm text-gray-500">No blog found yet.</p>
            )}

          </div>
          <div className="relative flex items-center gap-2 rounded-xl border border-black/30 bg-black/5 p-5 dark:border-white/30 dark:bg-white/5 text-sm text-gray-700 dark:text-white">
            <Book weight="duotone" />
            <span>Under construction...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaMention;
