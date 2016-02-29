'use strict'


import readFilePromise from './readFilePromise'
import writeFilePromise from './writeFilePromise'
import exphbs from 'express-handlebars'
import bodyParser from 'body-parser'
import superagent from 'superagent'
import returnId from './return-id'
import path from 'path'
import fs from'fs'


exports = module.exports =  (app) => {

  let blogPath = path.join(__dirname, '../data/db.json')

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/blogPost', (req, res) => {
  console.log(req.query)
  res.render('blogPost', {"post": req.query})
});


app.get('/blog', (req, res) => {
  readFilePromise(blogPath)
    .then( (data) => {
      var blogs = JSON.parse(data).blogs
        res.render('blog', {blog: blogs})
      .error( (err) => {
        console.log('ERROR')
      })
    })
})


app.get('/blog', (req, res) => {
   res.render('blog', {ID: blogs})
})


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/blog', urlencodedParser , (req, res) => {
  var inputData = JSON.stringify(req.body)
  console.log("This is the REQ BODY", req.body)

  readFilePromise(blogPath)
  .then( (data) => {
    var jsonObject = JSON.parse(data)

    var newID = returnId()
    var newPost = {
      "title" : "ashley town",
      "post": "herrrrrre's ashley",
      "ID": newID
    }
    jsonObject.blogs.push(newPost)
       

    writeFilePromise(blogPath, JSON.stringify(jsonObject))
    .then( () => {
      res.end('POST/blogPath end')
      .error( (err) => {
        console.log('ERROR! ERROR!! ERROR!!!')
      })
    })
  })
})


app.get('/gallery', (req, res) => {
  res.render('gallery');
})

//Add new routes here

}


