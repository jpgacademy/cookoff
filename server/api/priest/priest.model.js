'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PriestSchema = new Schema({
  name: String,
  vote: Number,
  picId: String,
  image: String,
  active: Boolean
});

module.exports = mongoose.model('Priest', PriestSchema);