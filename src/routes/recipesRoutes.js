import express from 'express'
import recipesController from '../controller/recipesController.js'
const router = express.Router();

router.get("/", recipesController.allRecipes);
router.post("/", recipesController.saveRecipe)
router.get("/:id", recipesController.searchRecipeForId);
router.delete("/:id", recipesController.deleteRecipe)
router.patch("/:id", recipesController.upDateRecipe)

export default router

