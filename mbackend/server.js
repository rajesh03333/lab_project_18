// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/authRoutes");

// dotenv.config();

// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173", // React frontend port
// }));

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log("MongoDB connection error:", err));

// // Routes
// app.use("/api/auth", authRoutes); // Use the authentication routes

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
























//-->sucess

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const mongoose = require("mongoose");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const setRoutes = require("./routes/setRoutes"); // Add this line

// //dotenv.config();

// const app = express();

// // Middlewares
// app.use(express.json()); // To parse JSON request bodies
// app.use(cors({
//   origin: "http://localhost:5173", // React frontend port
// }));
// app.use(cookieParser());

// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log("MongoDB connection error:", err));

// // Routes
// app.use("/api/auth", authRoutes); // Use the authentication routes
// app.use('/api/sets', setRoutes);



// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ message: 'Something went wrong. Please try again later.' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





















// server.js

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const setRoutes = require('./routes/setRoutes'); // Import set routes

// Initialize the app
const app = express();
dotenv.config(); // Load environment variables from .env file

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/sets', setRoutes); // Set routes

// Port configuration
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set in .env

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
















// -->testing


// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/api/sets/fetchSetDetails', (req, res) => {
//   const setNumber = req.query.setNumber;
  
//   if (!setNumber) {
//     return res.status(400).json({ error: 'Set number is required' });
//   }
  
//   const sets = [
//     {
//       setNumber: '1',
//       questions: ['Sample Q1', 'Sample Q2'],
//       coNumbers: ['2', '1'],
//     },
//     {
//       setNumber: '2',
//       questions: ['Q3', 'Q4'],
//       coNumbers: ['3', '4'],
//     },
//   ];

//   const setData = sets.find(set => set.setNumber === setNumber);

//   if (!setData) {
//     return res.status(404).json({ error: 'Set not found' });
//   }

//   res.json(setData);  // Send set details as JSON
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });