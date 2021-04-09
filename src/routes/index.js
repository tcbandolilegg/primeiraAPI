import express from 'express'
const router = express.Router();

// router.METHOD(caminho, handler)

router.get("/", (req, res) => {
  res.send("O servidor está no ar");
  console.log('Request URL:', req.originalUrl)
});

export default router
// module.exports = router;
