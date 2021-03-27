
const express = require('express');
const router = express.Router();
const blogsController = require("../controller/blogsController");


router.get("/", blogsController.allBlogs);
router.get("/:id", blogsController.searchBlogForId);
router.post("/", blogsController.saveBlog)
router.delete("/:id", blogsController.deleteBlog)
router.patch("/:id", blogsController.upDateBlog)



module.exports = router;

