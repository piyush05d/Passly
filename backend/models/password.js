const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
   webname: {
      type: String,
      required: true
   },

   username: {
      type: String,
      required: true,
      minlength: 4
   },

   pass: {
      type: String,
      required: true,
      minlength: 5
   }
});

module.exports = mongoose.model('Password', passwordSchema);