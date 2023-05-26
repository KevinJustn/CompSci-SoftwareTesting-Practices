'use strict';

// main.js

const express = require( 'express' );
const layouts = require( 'express-ejs-layouts' );
const app = express();
const homeController = require( './controllers/homeController' );
const errorController = require( './controllers/errorController');
const path = require( 'path' );


app.use(
    express.urlencoded({
        extended:false
    })
)
app.use(express.json());

app.set( 'views', path.join(__dirname, 'views'));
app.set( 'port', process.env.PORT || 3000 );
app.set( 'view engine', 'ejs' );
app.use( layouts );

console.log("pass 1");
app.get( '/', homeController.showHome );
console.log('pass 2');
app.get( '/users', homeController.showUsers );
app.post( '/users/submit', homeController.addUsers );
console.log('pass 2 - find for delete in main');
app.get('/delete', homeController.postFindUserForm);
console.log('pass 2 - delete function in main')
app.post('/users/delete', homeController.deleteUsers);

console.log('pass 2a');

app.get ( '/contact', homeController.postSignUpForm);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

console.log('pass 3');
/*
app.listen( app.get( 'port' ), () => {
  console.log( `Server running on port: ${app.get('port')}` );
} );*/
module.exports = app;