import express from 'express'
import blogsController from '../controller/blogsController.js'
const router = express.Router();

router.get("/", blogsController.allBlogs);
router.get("/:id", blogsController.searchBlogForId);
router.post("/", blogsController.saveBlog)
router.delete("/:id", blogsController.deleteBlog)
router.patch("/:id", blogsController.upDateBlog)

export default router
