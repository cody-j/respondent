const d2r = (deg) => deg * (Math.PI/180)

/**
 * 
 * @param coords1 [lat, long]
 * @param coords2 [lat, long]
 * 
 * implementation of Haversine formula
 * https://en.wikipedia.org/wiki/Haversine_formula
 * 
 */
function getDistance (coords1, coords2) {
  const [lat1, lon1] = coords1
  const [lat2, lon2] = coords2
  
  // Earth
  const R = 6371
  
  const latDelta = d2r(lat2-lat1)
  const lonDelta = d2r(lon2-lon1) 
  const a = Math.sin(latDelta/2) * Math.sin(latDelta/2) +
            Math.cos(d2r(lat1)) * Math.cos(d2r(lat2)) * 
            Math.sin(lonDelta/2) * Math.sin(lonDelta/2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  const distance = R * c
  return distance
}

function getDistanceToEachCity (respondent, { cities }) {
  const respondentCoords = [Number(respondent.latitude), Number(respondent.longitude)]
  
  const distances = {}

  for (let city of cities) {
    try {

      const cityCoords = [city.location.location.latitude, city.location.location.longitude]
      distances[city.location.city] = getDistance(respondentCoords, cityCoords)
      
    } catch {
      console.error("Couldn't get coordinates for: ", city)
      distances[city.location.city] = null
    }
  }

  return distances
}

module.exports = {
  getDistance,
  getDistanceToEachCity,
}
