const mongoose = require('mongoose');

const NavCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});


module.exports = mongoose.model('NavCategory', NavCategorySchema);
