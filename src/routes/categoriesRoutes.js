
const express = require('express');
const router = express.Router();
const categoriesController = require("../controller/categoriesController");



router.get("/", categoriesController.allCategories);
router.get("/:id", categoriesController.searchCategoryForId);
router.post("/", categoriesController.saveCategory)
router.delete("/:id", categoriesController.deleteCategory)
router.patch("/:id", categoriesController.upDateCategory)



module.exports = router;

