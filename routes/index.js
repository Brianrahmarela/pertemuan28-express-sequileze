const express =require('express');
const router = express.Router()
const userRouter = require("./user")

//route
router.get("/", (req, res) => {
  res.json({
    message: "welcome"
  })
})

router.use("/user", userRouter)

module.exports = router