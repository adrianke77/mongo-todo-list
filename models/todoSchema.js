var mongoose = require( 'mongoose' );

// make todo schema
var todoSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  completed: Boolean
} );

var Todo = mongoose.model( "Todo", todoSchema );

module.exports = Todo;