import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utils/api";
import { Calendar, Clock, FileText, Hash } from "@phosphor-icons/react";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${slug}`);
        if (res.data.success) {
          setBlog(res.data.blog);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading blog...</p>;
  if (!blog) return <p className="text-center py-10 text-red-500">Blog not found.</p>;

  const { title, date, readTime, tags, content, category } = blog;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full flex flex-col gap-6 mb-8 mx-auto">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="flex flex-col gap-2 text-base">
        <div className="flex items-center gap-2">
          <Calendar size={18} weight="duotone" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <FileText size={18} weight="duotone" />
          <span>{category}</span>
          <Clock size={18} weight="duotone" />
          <span>{readTime} min read</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span key={i} className="px-2 py-1 flex items-center border rounded-lg">
              <Hash size={18} weight="duotone" />{tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="w-full text-base md:text-lg leading-relaxed space-y-4 prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPost;