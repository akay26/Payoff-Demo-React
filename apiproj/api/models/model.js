'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: String,
    required: "Please enter the amount of debt"
  },
  totaldebt:{
    type: String,
    required: "Please enter the total debt"
  },
  months:{
    type: String,
    required: "Please enter the total debt"
  },
  status: {
    type: [{
      type: String,
      enum: ['Credit Cards', 'Home', 'Car']
    }],
    default: ['Credit Cards']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);