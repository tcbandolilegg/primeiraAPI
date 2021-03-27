
const express = require('express');
const router = express.Router();
const usersController = require("../controller/usersController");

router.get("/", usersController.allUsers);
router.get("/:id", usersController.searchUserForId);
router.post("/", usersController.saveUser)
router.delete("/:id", usersController.deleteUser)
router.patch("/:id", usersController.upDateUser)



module.exports = router;



