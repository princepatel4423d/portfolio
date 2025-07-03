import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderSimple, Tag, Article } from '@phosphor-icons/react';
import BlogCard from '../_components/BlogCard';
import api from '@/utils/api';

const BlogHome = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/blogs/all');
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-6">
      <h1 className="text-2xl font-bold mb-6">Blogs</h1>

      <div className="flex flex-wrap gap-3 text-sm mb-6">
        <button
          onClick={() => navigate('categories')}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer"
        >
          <FolderSimple size={18} weight="duotone" />
          <span>Categories</span>
        </button>
        <button
          onClick={() => navigate('tags')}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer"
        >
          <Tag size={18} weight="duotone" />
          <span>Tags</span>
        </button>
        <button
          onClick={() => navigate('til')}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer"
        >
          <Article size={18} weight="duotone" />
          <span>T.I.L</span>
        </button>
      </div>

      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </section>
  );
};

export default BlogHome;