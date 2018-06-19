var express = require('express');
var consolidate = require('consolidate');


var app = express();




// set handlebars as default template engine for html extension
app.engine('html', consolidate.handlebars);

// set /views as default template location
app.set('views', __dirname + '/../views');

// set html as default template extension
app.set('view engine', 'html');

// use express static router for serving static files
var staticRouter = express.static(__dirname + '/../public');
app.use(staticRouter);


// handle GET Request at /test URL
app.get('/', function (request, response) {
    // response.sendFile(__dirname + '/views/index.html');
    response.render('index', {});
});


// proces.on()

app.listen(5050, function () {
    console.log('server started');
});
