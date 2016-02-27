var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes')
var app = express();
var path = require('path')


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '../Public')))


routes(app)

app.listen(3000);