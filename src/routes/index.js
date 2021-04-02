import express from 'express'
const router = express.Router();

// router.METHOD(caminho, handler)

router.get("/", (request, response) => {
  response.send("Hello World");
  console.log('Request URL:', req.originalUrl)
});

export default router
// module.exports = router;
