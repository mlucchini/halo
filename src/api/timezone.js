const TIMEZONEDB_API_TOKEN = 'NA3X7Z38AJJ2'
const BY = 'position'

const request = (lat, lng) => (
  fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONEDB_API_TOKEN}&lat=${lat}&lng=${lng}&by=${BY}&format=json`)
    .then(response => {
      if (! response.ok) { throw response }
      return response.json()
    })
)

export const timezone = (lat, lng) => request(lat, lng)
