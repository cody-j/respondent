const { getDistance } = require('./distance.js')

describe('getDistance', () => {
  const LONG_LAT_UNIT_IN_KM = 111

  test('zero distance; origin', () => {
    expect(getDistance([0, 0], [0, 0])).toEqual(0)
  })

  test('zero distance; positive', () => {
    expect(getDistance([10, 10], [10, 10])).toEqual(0)
  })
  
  test('zero distance; negative', () => {
    expect(getDistance([-10, -10], [-10, -10])).toEqual(0)
  })

  test('latitude unit; from origin', () => {
    expect(Math.round(getDistance([0, 0], [1, 0]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
  
  test('latitude unit; positive', () => {
    expect(Math.round(getDistance([10, 0], [11, 0]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
  
  test('latitude unit; negative', () => {
    expect(Math.round(getDistance([-10, 0], [-11, 0]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
  
  test('longitude unit; from origin', () => {
    expect(Math.round(getDistance([0, 0], [0, 1]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
  
  test('longitude unit; positive', () => {
    expect(Math.round(getDistance([0, 10], [0, 11]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
  
  test('longitude unit; negative', () => {
    expect(Math.round(getDistance([0, -10], [0, -11]))).toEqual(LONG_LAT_UNIT_IN_KM)
  })
})
