const OPENWEATHERMAP_API_TOKEN = '36416a6ebb453dbe55151fbb3310561b'
const UNITS = 'metric'

const request = (city, type) => (
  fetch(`http://api.openweathermap.org/data/2.5/${type}?q=${city}&units=${UNITS}&appid=${OPENWEATHERMAP_API_TOKEN}`)
    .then(response => {
      if (! response.ok) { throw response }
      return response.json()
    })
)

export const current = (city) => request(city, 'weather')
export const forecast = (city) => request(city, 'forecast')
