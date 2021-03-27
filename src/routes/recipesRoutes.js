
const express = require('express');
const router = express.Router();
const recipesController = require("../controller/recipesController")


router.get("/", recipesController.allRecipes);
router.get("/:id", recipesController.searchRecipeForId);
router.post("/", recipesController.saveRecipe)
router.delete("/:id", recipesController.deleteRecipe)
router.patch("/:id", recipesController.upDateRecipe)



module.exports = router;

