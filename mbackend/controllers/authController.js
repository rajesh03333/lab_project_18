// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const { validatePassword, hashPassword, verifyPassword } = require("../utils/passwordUtils");

// // Signup Controller
// const signup = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists!" });
//     }

//     // Validate and hash password
//     await validatePassword(password);
//     const hashedPassword = await hashPassword(password);

//     // Create new user
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     // Generate token
//     const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.status(201).json({ message: "User created successfully!", token });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Login Controller
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found!" });
//     }

//     // Verify password
//     const isValid = await verifyPassword(user.password, password);
//     if (!isValid) {
//       return res.status(400).json({ message: "Invalid credentials!" });
//     }

//     // Generate token
//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ message: "Login successful!", token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { signup, login };



























//-->sucess


// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Password validation function
// const validatePassword = (password) => {
//   const errors = [];

//   // Check password length
//   if (password.length < 8) {
//     errors.push("Password must be at least 8 characters long.");
//   }

//   // Check for uppercase letter
//   if (!/[A-Z]/.test(password)) {
//     errors.push("Password must contain at least one uppercase letter.");
//   }

//   // Check for lowercase letter
//   if (!/[a-z]/.test(password)) {
//     errors.push("Password must contain at least one lowercase letter.");
//   }

//   // Check for number
//   if (!/[0-9]/.test(password)) {
//     errors.push("Password must contain at least one number.");
//   }

//   // Check for special character
//   if (!/[^A-Za-z0-9]/.test(password)) {
//     errors.push("Password must contain at least one special character (e.g., @, #, $, %, etc.).");
//   }

//   return errors;
// };

// // Sign Up
// const signup = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Validate password
//     const passwordErrors = validatePassword(password);
//     if (passwordErrors.length > 0) {
//       return res.status(400).json({ message: passwordErrors.join(" ") });
//     }

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists. Please log in." });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       isFirstTime: true // New users are treated as first-time users
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Generate a JWT token
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ token, isFirstTime: newUser.isFirstTime });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };

// // Login
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password." });
//     }

//     // Compare the password with the stored hash
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid email or password." });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, isFirstTime: user.isFirstTime });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };

// module.exports = { signup, login };
















const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Password validation function
const validatePassword = (password) => {
  const errors = [];

  // Check password length
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  // Check for number
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number.");
  }

  // Check for special character
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Password must contain at least one special character (e.g., @, #, $, %, etc.).");
  }

  return errors;
};

// Sign Up
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate password
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      return res.status(400).json({ message: passwordErrors.join(" ") });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      isFirstTime: true // New users are treated as first-time users
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, isFirstTime: newUser.isFirstTime });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare the password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, isFirstTime: user.isFirstTime });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { signup, login };
