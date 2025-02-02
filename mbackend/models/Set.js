// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const setSchema = new Schema(
//   {
//     user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
//     sets: [
//       {
//         setNumber: String,
//         questions: [String],
//         coNumbers: [String],
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const Set = mongoose.model('Set', setSchema);
// module.exports = Set;















// Set.js (in models folder)

const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sets: [
    {
      setNumber: { type: Number, required: true },
      questions: [{ type: String }],
      coNumbers: [{ type: Number }]
    }
  ]
});

module.exports = mongoose.model('Set', setSchema);
