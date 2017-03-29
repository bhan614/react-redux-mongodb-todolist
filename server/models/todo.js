const mongoose = require('mongoose');
const TodoSchema = require('../schemas/todo');
const TodoBox = mongoose.model('TodoBox', TodoSchema);

module.exports = TodoBox;
