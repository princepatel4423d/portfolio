import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import api from "@/utils/api";

const UploadBlog = () => {
  const navigate = useNavigate();
  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("");
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !desc || !content || !readTime) {
      return setError("All fields are required.");
    }

    try {
      const res = await api.post("/blogs/create", {
        title,
        desc,
        content,
        readTime,
        category,
        tags: tags.split(',').map(tag => tag.trim()),
      });

      if (res.data?.message) {
        setSuccess(res.data.message);
        setTimeout(() => navigate("/blog"), 1500);
      }
    } catch (err) {
      setError("Failed to upload blog.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/blog/login");
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">
        Upload Blog Post
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-medium">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg border dark:bg-neutral-900"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 text-sm font-medium">Short Description</label>
          <textarea
            rows="3"
            placeholder="Write a short description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 rounded-lg border dark:bg-neutral-900"
            required
          />
        </div>

        {/* Blog Content */}
        <div className="text-black">
          <label className="block mb-2 text-sm font-medium">Blog Content</label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g. Programming"
            className="w-full p-3 rounded-lg border dark:bg-neutral-900"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-2 text-sm font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. react, javascript"
            className="w-full p-3 rounded-lg border dark:bg-neutral-900"
          />
        </div>

        {/* Read Time */}
        <div>
          <label className="block mb-2 text-sm font-medium">Estimated Read Time (min)</label>
          <input
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            placeholder="e.g. 5"
            className="w-full p-3 rounded-lg border dark:bg-neutral-900"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Create Blog
        </button>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white ml-2 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default UploadBlog;