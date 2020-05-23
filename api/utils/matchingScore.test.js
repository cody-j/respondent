var project = require('../../data/be/project.json')
var { getMatchScore } = require('./matchingScore.js')


describe('getMatchScore', () => {
  const respondent1 = {
    jobTitle: 'Analyst',
    industry: 'Banking,Utilities,Financial Services,Design,Insurance'
  }
  
  const respondent2 = {
    jobTitle: 'Junior Software Developer',
    industry: 'Computer Software'
  }
  
  const respondent3 = {
    jobTitle: 'Software Engineer',
    industry: 'Computer Software,Banking,Automotive,Utilities'
  }
  
  const respondent4 = {
    jobTitle: 'Java Software Engineer',
    industry: 'Computer Software,Banking,Financial Services'
  }
  test('cases', () => {
    const r1 = getMatchScore(respondent1, project)
    const r2 = getMatchScore(respondent2, project)
    const r3 = getMatchScore(respondent3, project)
    const r4 = getMatchScore(respondent4, project)

    expect(r1).toBeLessThan(r2)
    expect(r2).toBeLessThan(r3)
    expect(r3).toBeLessThan(r4)
  })
})
