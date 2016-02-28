var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes')
var app = express();
var path = require('path')
var bodyParser = require('body-parser')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '../Public')))

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 


routes(app)

app.listen(3000);