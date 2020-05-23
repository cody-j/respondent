var express = require('express')
var router = express.Router()

var project = require('../../data/be/project.json')

router.get('/', (req, res) => {
  // We'll pretend some db is handling this.
  res.send(project)
})

module.exports = router
