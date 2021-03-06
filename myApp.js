var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

// --> 7) Mount the Logger middleware here
app.use( (req, res, next) => {
    console.log(req.method + " " +req.path + " - " + req.ip);
    next();
});

// --> 11 Mount the body-parser middleware here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */


/** 3) Serve an HTML file */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

/** 4) Serve static assets */
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

/** 5) Serve JSON on a specific route */
// app.get('/json', (req, res) => {
//     res.json(
//         {"message":"Hello json"}
//     );
// });


/** 6) Use the .env file to configure the app  */
app.get('/json', (req, res) => {
    console.log(process.env.MESSAGE_STYLE, "<= message style");
    if(process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
            {"message": "HELLO JSON"}
            );
    } else {
        res.json(
            {"message":"Hello json"}
        );
    }
});

/** 7) Root-level middleware - A logger */
// place it before all the routes


/** 8) Changing middleware. A Time server */
function getCurrentTimeString(){
    return new Date().toString();
}

app.get('/now', (req, res, next) => {
    req.time = getCurrentTimeString();
    next();
}, (req, res) => {
    res.json(
        {time: req.time}
    );
});

/** 9) Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
 module.exports = app;