const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Check if the contact number is exactly 10 digits long
        return /^[0-9]{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid contact number!`
    }
  }
});

module.exports = mongoose.model('Staff', StaffSchema);
