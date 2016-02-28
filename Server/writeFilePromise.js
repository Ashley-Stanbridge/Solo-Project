'use strict'
var Promise = require('es6-promise').Promise
var fs = require('fs')

module.exports = function (filePath, data) {
  console.log('write file promise!')
 return new Promise((resolve, reject) => {
   fs.writeFile(filePath, data, (err, res) => {
     if (err) {
       reject(err)
     } else {
       resolve(res)
     }
   })
 })
}