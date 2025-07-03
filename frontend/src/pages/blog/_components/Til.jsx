import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Article } from '@phosphor-icons/react';
import api from '@/utils/api';

const Til = () => {
  const [latestBlog, setLatestBlog] = useState(null);

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
    <section className="py-6">
      <div className="flex items-center gap-2 mb-6">
        <Article size={26} weight="duotone" />
        <h1 className="text-2xl font-bold">Today I Learned</h1>
      </div>

      {latestBlog ? (
        <div className="w-full border rounded-2xl p-6 shadow-md dark:shadow">
          <h2 className="text-xl font-semibold mb-2">
            {latestBlog.title}
          </h2>

          <div className="flex items-center gap-6 text-sm mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={18} weight="duotone" />
              <span>{formatDate(latestBlog.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={18} weight="duotone" />
              <span>{latestBlog.readTime} min read</span>
            </div>
          </div>

          <p className="leading-relaxed whitespace-pre-line">
            {latestBlog.desc}
          </p>
        </div>
      ) : (
        <p>No blog found yet.</p>
      )}
    </section>
  );
};

export default Til;