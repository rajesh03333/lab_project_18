const express = require("express");
const router = express.Router();
const verifyToken = require("./authMiddleware");

router.get("/protected", verifyToken, (req, res) => {
  // If token is valid, send the user data
  res.json({
    name: "John Doe", // This can be data from your database
    email: req.user.email,
    id: req.user.id,
  });
});

module.exports = router;
