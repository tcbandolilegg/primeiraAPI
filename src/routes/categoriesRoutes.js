import express from 'express'
import categoriesController from '../controller/categoriesController.js'
const router = express.Router();

router.get("/", categoriesController.allCategories);
router.post("/", categoriesController.saveCategory)
router.get("/:id", categoriesController.searchCategoryForId);
router.delete("/:id", categoriesController.deleteCategory)
router.patch("/:id", categoriesController.upDateCategory)

export default router
