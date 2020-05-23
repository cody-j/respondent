require('dotenv').config()
var app = require('express')()

var cors = require('cors')
app.use(cors())

// Resources
const respondents = require('./resources/respondents.js')
const project = require('./resources/project.js')

app.use('/respondents', respondents)
app.use('/project', project)

// Health Check
app.get('/', (req, res) => {
  res.send('healthy')
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`)
})
