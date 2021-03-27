
const express = require('express')
const router = express.Router()
const notebooksController = require("../controller/notebooksController")



router.get("/", usersController.allUsers);
router.get("/:id", usersController.searchForId);
router.post("/", usersController.saveUser)
router.delete("/:id", usersController.deleteUser)
router.patch("/:id", usersController.upDateUser)



module.exports = router;

