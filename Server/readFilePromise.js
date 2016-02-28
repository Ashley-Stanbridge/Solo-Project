'use strict'
var Promise = require('es6-promise').Promise
var fs = require('fs')

module.exports = function (filePath) {
 return new Promise((resolve, reject) => {
   fs.readFile(filePath, 'utf8', (err, res) => {
     if (err) {
       reject(err)
     } else {
       resolve(res)
     }
   })
 })
}