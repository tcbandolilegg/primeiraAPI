
const express = require('express')
const router = express.Router()
const notebooksController = require("../controller/notebooksController")

router.get("/", notebooksController.allNotebooks);
router.get("/:id", notebooksController.searchNotebookForId);
router.post("/", notebooksController.saveNotebook)
router.delete("/:id", notebooksController.deleteNotebook)
router.patch("/:id", notebooksController.upDateNotebook)



module.exports = router;

