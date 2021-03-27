
const express = require('express');
const router = express.Router();
const blogsController = require("../controller/blogsController");


router.get("/", usersController.allBlogs);
router.get("/:id", usersController.searchBlogForId);
router.post("/", usersController.saveBlog)
router.delete("/:id", usersController.deleteBlog)
router.patch("/:id", usersController.upDateBlog)



module.exports = router;

