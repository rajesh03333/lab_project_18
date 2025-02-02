// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User"); // Import User model
// const router = express.Router();

// // Signup route
// // router.post("/signup", async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     const userExists = await User.findOne({ email });
// //     if (userExists) {
// //       return res.status(400).json({ message: "User already exists!" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 12);
// //     const newUser = new User({ email, password: hashedPassword });

// //     await newUser.save();
// //     const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

// //     res.status(201).json({ message: "User created successfully", token });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error during signup", error });
// //   }
// // });
// // Signup route
// router.post("/signup", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists!" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = new User({ email, password: hashedPassword });

//     await newUser.save();
//     const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.status(201).json({ message: "User created successfully", token, isFirstTime: true });
//   } catch (error) {
//     res.status(500).json({ message: "Error during signup", error });
//   }
// });


// // Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found!" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials!" });
//     }

//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ message: "Error during login", error });
//   }
// });

// module.exports = router;


const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import User model
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send token and indicate if it's the user's first time
    res.status(201).json({ message: "User created successfully", token, isFirstTime: true });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error });
  }
});

module.exports = router;
