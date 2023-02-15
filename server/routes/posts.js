import express from 'express';

import { getPosts, getPost, getPostsBySearch, createPost, updatePost, likePost, deletePost, commentPost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.get('/:id', getPost);
router.post('/:id/commentPost', commentPost);

export default router;