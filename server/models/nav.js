const mongoose = require('mongoose');

const NavSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  icon: String,
  description: String,
  link: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'NavCategory' },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});


module.exports = mongoose.model('Nav', NavSchema);
