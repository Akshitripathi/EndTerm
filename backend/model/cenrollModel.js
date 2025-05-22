const mongoose = require('mongoose');

const cenrollSchema = new mongoose.Schema({
  studentName: {type: String, required: true},
  email: {type: String,required: true,},
  course: {type: String,required: true,},
  enrollmentDate: {type: Date,default: Date.now,},
});

module.exports = mongoose.model('Cenroll', cenrollSchema);