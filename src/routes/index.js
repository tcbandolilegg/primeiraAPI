const express = require('express');
const router = express.Router();

// router.METHOD(caminho, handler)

router.get("/", (request, response) => {
  response.send("Hello World");
});

module.exports = router;
