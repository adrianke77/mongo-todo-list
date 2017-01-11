const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/todos' );
mongoose.Promise = global.Promise;

//import schema
const Todo = require( "../models/todoSchema" )

const uuidGenerator = require( 'uuid/v4' );

function create( params ) {
  let successful = false
  Todo.create( {
    name: params.name,
    description: params.description || "Gotta get this done!",
    completed: params.completed || false
  }, ( err, user ) => {
    if ( err )
      return console.log( err );
    console.log( user );
  } )
}

function list( callback ) {
  var items = [];
  Todo.find( {}, ( err, responseFromFind ) => {
    if ( err ) return console.log( err )
    items = responseFromFind;
    callback( items );
  } )
}

function show( id, callback ) {
  Todo.find( {
    _id: id
  }, ( err, responseFromFind ) => {
    if ( err ) return console.log( err );
    item = responseFromFind;
    callback( item );
  } )
}

// UPDATE - params should be an object with KVPs for the fields to update
function update( id, params ) {
  Todo.find( {
    _id: id
  }, ( err, responseFromFind ) => {
    if ( err ) return console.log( err );
    let oldItem = responseFromFind;
    console.log("olditem from update is ",oldItem)
    Todo.update( {
      _id: id
    }, {
      name: params.name || oldItem.name,
      description: params.description || oldItem.description
    }, ( err ) => {
      if ( err ) return console.log( err );
    } )
    if ( typeof params.completed !== "undefined" )
      Todo.update( {
        _id: id
      }, {
        completed: params.completed
      }, ( err ) => {
        if ( err ) return console.log( err );
      } )
  } )

}

// DESTROY (destroy & destroyAll)
function destroy( id ) {
  Todo.findByIdAndRemove( id, ( err, item ) => {
    if ( err ) return console.log( err );
  } )
}

function destroyAll() {
  Todo.remove( {}, ( err ) => {
    if ( err ) return console.log( err );
  } );
}

module.exports = {
  create: create,
  list: list,
  show: show,
  update: update,
  destroy: destroy,
  destroyAll: destroyAll
};