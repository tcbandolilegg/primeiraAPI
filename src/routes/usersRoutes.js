
const express = require('express');
const router = express.Router();
const controller = require("../controller/usersController");

router.get("/usuarios", controller.listarTodosUsers);
router.get("/usuarios/:id", controller.pesquisaPorId);
router.post("/usuarios", controller.salvarUser)
router.delete("/usuarios/:id", controller.apagarUser)


module.exports = router;



