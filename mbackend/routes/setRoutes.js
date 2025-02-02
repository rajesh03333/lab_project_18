// const express = require('express');
// const Set = require('../models/Set'); // Import Set model
// const authenticateUser = require('../middleware/authMiddleware'); // Import authentication middleware

// const router = express.Router();

// // router.get('/fetchSetDetails', authenticateUser, async (req, res) => {
// //   const { setNumber } = req.query; // Only check for setNumber

// //   try {
// //     // Fetch set data for the logged-in user and the specified set number
// //     const setData = await Set.findOne({
// //       user: req.user._id,  // Ensure to filter by the logged-in user
// //     });

// //     if (!setData) {
// //       return res.status(404).json({ message: 'No set data found for the given user' });
// //     }

// //     // Find the set details by set number
// //     const setDetails = setData.sets.find(set => set.setNumber === parseInt(setNumber));
    
// //     if (!setDetails) {
// //       return res.status(404).json({ message: 'Set details not found' });
// //     }

// //     // Return the set details (questions and CO numbers)
// //     res.status(200).json(setDetails.questions);
    
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Error fetching set details' });
// //   }
// // });






// // router.get('/api/sets/fetchSetDetails', (req, res) => {
// //   const setNumber = req.query.setNumber; // Get the setNumber from the query parameter

// //   if (!setNumber) {
// //     return res.status(400).json({ error: 'Set number required' });
// //   }

// //   // Fetch the set details from your database (assuming 'sets' is your collection)
// //   const setDetails = sets.find(set => set.setNumber === setNumber);

// //   if (!setDetails) {
// //     return res.status(404).json({ error: 'Set not found' });
// //   }

// //   res.json({ sets: [setDetails] }); // Respond with the set details
// // });

// router.get('/fetchSetDetails', async (req, res) => {
//   const { setNumber } = req.query;

//   if (!setNumber) {
//     return res.status(400).json({ error: 'Set number is required' });
//   }

//   try {
//     // Fetching set details from MongoDB
//     const setData = await Set.findOne({ setNumber: setNumber });

//     if (!setData) {
//       return res.status(404).json({ error: 'Set not found' });
//     }

//     res.json(setData); // Sending the fetched set details
//   } catch (error) {
//     console.error('Error fetching set details:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


// // Route to store sets data
// router.post('/add', authenticateUser, async (req, res) => {
//   const { sets } = req.body;
  
//   try {
//     // Create a new Set document for the logged-in user
//     const newSet = new Set({
//       user: req.user._id, // Reference to the logged-in user
//       sets: sets, // The sets data sent from the frontend
//     });

//     // Save the new set data in the database
//     await newSet.save();

//     res.status(201).json({ message: 'Sets stored successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error storing sets data' });
//   }
// });

// module.exports = router;




const express = require('express');
const Set = require('../models/Set'); // Import Set model
const authenticateUser = require('../middleware/authMiddleware'); // Import authentication middleware

const router = express.Router();

// Fetch set details based on setNumber
// router.get('/fetchSetDetails', authenticateUser, async (req, res) => {
//   const { setNumber } = req.query;

//   if (!setNumber) {
//     return res.status(400).json({ error: 'Set number is required' });
//   }

//   try {
//     // Fetching set details from MongoDB
//     const setData = await Set.findOne({ 'sets.setNumber': setNumber });

//     if (!setData) {
//       return res.status(404).json({ error: 'Set not found' });
//     }

//     // Find the set details using the set number
//     const setDetails = setData.sets.find(set => set.setNumber === parseInt(setNumber));

//     if (!setDetails) {
//       return res.status(404).json({ error: 'Set details not found' });
//     }

//     res.json({ sets: [setDetails] }); // Sending the fetched set details
//   } catch (error) {
//     console.error('Error fetching set details:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// setRoutes.js
router.get('/fetchSetDetails', async (req, res) => {
  const { setNumber } = req.query;

  if (!setNumber) {
    return res.status(400).json({ error: 'Set number is required' });
  }

  try {
    const setData = await Set.findOne({ "sets.setNumber": setNumber });
    if (!setData) {
      return res.status(404).json({ error: 'Set not found' });
    }
    const setDetails = setData.sets.find(set => set.setNumber == setNumber);
    if (!setDetails) {
      return res.status(404).json({ error: 'Set details not found' });
    }
    res.json({ sets: [setDetails] });
  } catch (error) {
    console.error('Error fetching set details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Route to store sets data
router.post('/add', authenticateUser, async (req, res) => {
  const { sets } = req.body;

  try {
    // Create a new Set document for the logged-in user
    const newSet = new Set({
      user: req.user._id, // Reference to the logged-in user
      sets: sets, // The sets data sent from the frontend
    });

    // Save the new set data in the database
    await newSet.save();

    res.status(201).json({ message: 'Sets stored successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error storing sets data' });
  }
});

module.exports = router;
