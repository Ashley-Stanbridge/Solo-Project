var exphbs  = require('express-handlebars');
exports = module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('home');
});


  app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

  app.get('/portfolio', function (req, res) {
    res.render('/projects');
});


  app.get('/blog', function (req, res) {
    res.render('/blog');
});
//Add new routes here

}