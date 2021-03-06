import express from 'express'
import usersController from '../controller/usersController.js'
const router = express.Router();

router.get("/", usersController.allUsers);
router.post("/", usersController.saveUser)
router.get("/:id", usersController.searchUserForId);
router.delete("/:id", usersController.deleteUser)
router.patch("/:id", usersController.upDateUser)

export default router




