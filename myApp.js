var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

// --> 7) Mount the Logger middleware here


// --> 11 Mount the body-parser middleware here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */


/** 3) Serve an HTML file */
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/** 4) Serve static assets */
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

/** 5) Serve JSON on a specific route */


/** 6) Use the .env file to configure the app  */


/** 7) Root-level middleware - A logger */
// place it before all the routes


/** 8) Changing middleware. A Time server */


/** 9) Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
 module.exports = app;