var exphbs  = require('express-handlebars');
var superagent = require('superagent')
var readFilePromise = require('./readFilePromise')
var writeFilePromise = require('./writeFilePromise')
var bodyParser = require('body-parser')
var returnId = require('./return-id')
var path = require('path')
var fs = require('fs')


exports = module.exports = function (app) {

  var blogPath = path.join(__dirname, '../data/db.json')

  app.get('/', function (req, res) {
    res.render('home');
  });


  app.get('/portfolio', function (req, res) {
    res.render('portfolio');
});

  app.get('/projects', function (req, res) {
    res.render('projects');
});

  app.get('/blogPost', function (req, res) {
    console.log(req.query)
    res.render('blogPost', {"post": req.query})
});


app.get('/blog', function (req, res) {
    readFilePromise(blogPath)
      .then(function (data) {
        var blogs = JSON.parse(data).blogs
        // var blogs = data
        res.render('blog', {blog: blogs})
      .error(function (err) {
        console.log('ERROR')
      })
    })
})


app.get('/blog', function (req, res) {
  // if (req.query) 
   res.render('blog', {ID: blogs})
  })


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/blog', urlencodedParser ,function (req, res) {
  var inputData = JSON.stringify(req.body)
  console.log("This is the REQ BODY", req.body)

  readFilePromise(blogPath)
  .then( function (data) {
    var jsonObject = JSON.parse(data)

    var newID = returnId()
    var newPost = {
      "title" : "ashley town",
      "post": "herrrrrre's ashley",
      "ID": newID
    }
    jsonObject.blogs.push(newPost)
       

    writeFilePromise(blogPath, JSON.stringify(jsonObject))
    .then(function () {
      res.end('POST/blogPath end')
      .error(function (err) {
        console.log('ERROR! ERROR!! ERROR!!!')
      })
    })
  })
})


    app.get('/gallery', function (req, res) {
    res.render('gallery');
})

//Add new routes here

}


