const router = require('express').Router()
const csv2json = require('csvtojson')
const _ = require('lodash')
const project = require('../../data/be/project.json')
const { getMatchScore } = require('../utils/matchingScore.js')
const { getDistanceToEachCity } = require('../utils/distance.js')


async function readRespondents () {
  const json = await csv2json().fromFile('../data/be/respondents.csv')
  return json
}

function sortRespondents (respondents, maxDistance = null) {
  // Add match and distance properties to respondent objects
  let matchedRespondents = respondents.map(r => {
    r.score = getMatchScore(r, project)
    r.distancesToCities = getDistanceToEachCity(r, project)
    return r
  })
  
  if (maxDistance) {
    try {
      matchedRespondents = matchedRespondents.filter(r => {
        return Object.values(r.distancesToCities).some(d => d <= maxDistance)
      })
    } catch (e) {
      console.error("Couldn't filter on maxDistance", e)
    }
  }

  // Order by match score
  return _.orderBy(matchedRespondents, 'score', 'desc')
}

router.get('/', async (req, res) => {
  const qp = req.query
  
  // Pagination
  let start = 0
  let count = 25

  if (qp.start && !isNaN(Number(qp.start))) {
    start = Number(qp.start)
  }
  
  if (qp.count && !isNaN(Number(qp.count))) {
    count = Number(qp.count)
  }

  try {

    const respondents = await readRespondents()    

    const maxDistance = 10
    const sortedRespondents = sortRespondents(respondents, maxDistance)
    const paginatedRespondents = sortedRespondents.splice(start, count)

    res.status(200)
    res.send(paginatedRespondents)  
  
  } catch {
    res.status(500)
    res.send('Internal error fetching respondents')
  }
})

module.exports = router
