const _ = require('lodash')

function getMatchScore (respondent, project) {

  const { jobTitle, industry } = respondent
  const { professionalJobTitles, professionalIndustry } = project

  const JOB_TITLE_WEIGHT = 10
  const INDUSTRY_WEIGHT = 5

  try {

    let score = 0

    // Job Title
    let jobScore = 0
    for (let pjt of professionalJobTitles) {
      const intersection = _.intersection(pjt.split(' '), jobTitle.split(' '))
      let currJobScore = JOB_TITLE_WEIGHT * intersection.length
      if (currJobScore > jobScore) {
        jobScore = currJobScore
      }
    }

    
    // Industry
    let industriesMatched = 0
    const industries = industry.split(',')
    for (let ind of industries) {
      if (professionalIndustry.includes(ind)) {
        industriesMatched += 1
      }
    }

    const industryScore = INDUSTRY_WEIGHT * industriesMatched
    
    score += jobScore
    score += industryScore

    return score
  
  } catch {
    console.error("Couldn't get match score")
    return 0
  }

}

module.exports = {
  getMatchScore,
}
