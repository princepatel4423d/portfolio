import React, { useEffect, useState } from 'react';
import {
  Trophy,
  GraduationCap,
  Code,
  Star,
  Briefcase,
  Rocket,
  PaintBrushBroad,
  Question
} from '@phosphor-icons/react';

const iconMap = {
  Project: <Code size={28} weight="duotone" />,
  Community: <Star size={28} weight="duotone" />,
  Academic: <GraduationCap size={28} weight="duotone" />,
  Career: <Briefcase size={28} weight="duotone" />,
  Milestone: <Rocket size={28} weight="duotone" />,
  Design: <PaintBrushBroad size={28} weight="duotone" />,
  Default: <Trophy size={28} weight="duotone" />
};

const Milestones = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/princepatel4423d/portfolio-data/refs/heads/main/milestones.json'
        );
        const data = await res.json();
        setAchievements(data);
      } catch (err) {
        console.error('Failed to fetch milestones:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center gap-2 mb-10 flex justify-center items-center">
        <Trophy size={28} />
        My Achievements
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => {
          const icon = iconMap[item.type] || iconMap.Default;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 dark:bg-neutral-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border"
            >
              <div className="text-blue-600 shrink-0">{icon}</div>
              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm">{item.date}</p>
                <p className="mt-1 text-sm">
                  {item.description}
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-white bg-blue-500 px-3 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Milestones;
