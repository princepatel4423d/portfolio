import blogModel from '../models/blogModel.js';
import slugify from 'slugify';

// Upload a new blog post
export const uploadBlog = async (req, res) => {
  try {
    const { title, desc, content, readTime, category, tags } = req.body;

    if (!title || !desc || !content || !readTime || !category) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const slug = slugify(title, { lower: true, strict: true });

    // Check for duplicate slug
    const existingBlog = await blogModel.findOne({ slug });
    if (existingBlog) {
      return res.status(409).json({ success: false, message: "A blog with this title already exists." });
    }

    const newBlog = await blogModel.create({
      title,
      slug,
      desc,
      content,
      readTime,
      category,
      tags,
    });

    // Convert to plain object with clean _id and date
    const blogData = {
      ...newBlog.toObject(),
      _id: newBlog._id.toString(),
      date: newBlog.date?.toISOString(),
    };

    return res.status(201).json({
      success: true,
      message: "Blog uploaded successfully.",
      blog: blogData,
    });

  } catch (error) {
    console.error("Error uploading blog:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while uploading the blog.",
    });
  }
};

// Get a single blog post by slug
export const getSingleBlog = async (req, res) => {
  try {
    const blog = await blogModel.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    const blogData = {
      ...blog.toObject(),
      _id: blog._id.toString(),
      date: blog.date?.toISOString(),
    };

    res.status(200).json({ success: true, blog: blogData });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ success: false, message: "Error fetching blog." });
  }
};

// Get all blog posts
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find().sort({ date: -1 });
    const cleanedBlogs = blogs.map(blog => ({
      ...blog.toObject(),
      _id: blog._id.toString(),
      date: blog.date?.toISOString(),
    }));

    res.status(200).json({ success: true, blogs: cleanedBlogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
};

// Get all unique categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await blogModel.distinct("category");

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
    });
  }
};

// Get all unique tags
export const getAllTags = async (req, res) => {
  try {
    const blogs = await blogModel.find({}, 'tags');
    const tagSet = new Set();

    blogs.forEach(blog => {
      if (Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => tagSet.add(tag));
      }
    });

    const uniqueTags = Array.from(tagSet);

    res.status(200).json({
      success: true,
      tags: uniqueTags,
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ success: false, message: "Failed to fetch tags." });
  }
};
