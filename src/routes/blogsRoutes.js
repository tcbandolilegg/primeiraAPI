import express from 'express'
import blogsController from '../controller/blogsController.js'
const router = express.Router();

router.get("/", blogsController.allBlogs);
router.post("/", blogsController.saveBlog)
router.get("/:id", blogsController.searchBlogForId);
router.delete("/:id", blogsController.deleteBlog)
router.patch("/:id", blogsController.upDateBlog)

export default router
