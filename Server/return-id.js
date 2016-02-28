rid = require('readable-id')


module.exports = function() {
  id = shortid.generate()
  adjectiveIndex = Math.round(Math.random() * adjectives.length)
  nounIndex = Math.round(Math.random() * nouns.length)
  return adjectives[adjectiveIndex] + "-" + nouns[nounIndex] + "-" + id
}