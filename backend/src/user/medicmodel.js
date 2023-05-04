const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let medSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  job: {
    type: String
  },
}, {
  collection: 'stafftbl'
})
module.exports = mongoose.model('stafftbl', medSchema)