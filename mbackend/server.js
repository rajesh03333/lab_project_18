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


























const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); // Import routes for authentication
const setRoutes = require('./routes/setRoutes');  

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // To parse JSON request bodies
app.use(cors({
  origin: "http://localhost:5173", // React frontend port
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes); // Use the authentication routes
app.use('/api/sets', setRoutes);

// Start server
const PORT = process.env.PORT || 5000;
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