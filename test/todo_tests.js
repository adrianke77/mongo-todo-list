const assert = require( 'assert' );
const todosModel = require( '../models/todo.js' );

// // try create
// todosModel.create( {
//   name: "Ninja",
//   description: "run around with hands behind back",
//   completed: false
// } )
// todosModel.create( {
//     description: "run around with hands behind back",
//     completed: false
//   } ) //should throw error for no name
// todosModel.create( {
//   name: "Jump"
// } )

// // try list
// todosModel.list( function( items ) {
//   console.log( "callback from list gives", items )
// } )

// // try show
// todosModel.list( ( items ) => {
//   let id = items[ 0 ]._id
//   console.log( "show id grab gives", id )
//   todosModel.show( id, ( item ) => {
//     console.log( "show gives", item )
//   } )
// } )

// // // try update
// todosModel.list( ( items ) => {
//   let id = items[ 0 ]._id
//   console.log( "update id grab gives", id )
//   todosModel.update( id, {
//     // name: "Badoonga",
//     description: "badoongaed",
//     completed: true
//   } )
// } )

// try destroy
// todosModel.list( ( items ) => {
//   let id = items[ 0 ]._id
//   console.log( "destroy id grab gives", id )
//   todosModel.destroy( id )
// } )

// // try destroy all
// todosModel.destroyAll();