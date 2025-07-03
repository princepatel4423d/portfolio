import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from '@phosphor-icons/react';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  if (!blog) return null;

  const { title, desc, readTime, date, slug } = blog;

  // Ensure valid date
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'Unknown date';

  return (
    <div
      onClick={() => navigate(`/blog/post/${slug}`)}
      className="w-full border rounded-2xl p-4 mb-4 transition duration-300 shadow-md hover:shadow-xl cursor-pointer"
    >
      {/* Header: title + date */}
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
        <div className="hidden sm:flex items-center gap-1 text-base">
          <span>{formattedDate}</span>
          <Calendar size={18} weight="duotone" />
        </div>
      </div>

      {/* Mobile date + read time */}
      <div className="flex sm:hidden justify-start gap-4 mt-1 text-base">
        <div className="flex items-center gap-1">
          <span>{formattedDate}</span>
          <Calendar size={18} weight="duotone" />
        </div>
        <div className="flex items-center gap-1">
          <span>{readTime} min read</span>
          <Clock size={18} weight="duotone" />
        </div>
      </div>

      {/* Description and read time (desktop) */}
      <div className="hidden sm:flex justify-between items-start gap-4 mt-1">
        <p className="line-clamp-2 text-sm max-w-[90%]">{desc}</p>
        <div className="flex items-center gap-1 pl-4 text-base flex-shrink-0">
          <span>{readTime} min read</span>
          <Clock size={18} weight="duotone" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;