import express from 'express';
import {
  uploadBlog,
  getAllBlogs,
  getAllCategories,
  getAllTags,
  getSingleBlog
} from '../controllers/blogController.js';

const router = express.Router();

// Upload a new blog post
router.post('/create', uploadBlog);

// Get all blog posts
router.get('/all', getAllBlogs);

// Get all unique blog categories
router.get('/categories', getAllCategories);

// Get all unique blog tags
router.get('/tags', getAllTags);

// Get a single blog post by slug
router.get('/:slug', getSingleBlog);

export default router;