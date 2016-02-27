var exphbs  = require('express-handlebars');
var superagent = require('superagent')
var fs = require('fs')
var path = require('path')
exports = module.exports = function (app) {

var blogPath = path.join(__dirname, '../data/db.json')

  app.get('/blog')

  app.get('/', function (req, res) {
    res.render('home');
});


  app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

  app.get('/projects', function (req, res) {
    res.render('projects');
});


  app.get('/blog', function (req, res) {
    fs.readFile(blogPath, 'utf8', function (err, data) {
      if (err) throw err
        var blogs = JSON.parse(data).blogs
      console.log('blogs', blogs)
      res.render('blog', {blog: blogs});
    })
    //res.render('blog', {name: data});
});

    app.get('/gallery', function (req, res) {
    res.render('gallery');
});
//Add new routes here

}


