import express from 'express'
import notebooksController from '../controller/notebooksController.js'
const router = express.Router();

router.get("/", notebooksController.allNotebooks);
router.post("/", notebooksController.saveNotebook)
router.get("/:id", notebooksController.searchNotebookForId);
router.delete("/:id", notebooksController.deleteNotebook)
router.patch("/:id", notebooksController.upDateNotebook)

export default router


