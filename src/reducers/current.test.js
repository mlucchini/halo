import current from './current'
import * as types from '../actions/types'

describe('current reducer', () => {  
  it('should handle RECEIVE_CITY_WEATHER', () => {
    expect(
      current(undefined, {
        type: types.RECEIVE_CITY_WEATHER,
        data: {
          city: {
            // http://samples.openweathermap.org/data/2.5/weather?q=M%C3%BCnchen,DE&appid=b1b15e88fa797225412429c1c50c122a1
            "coord": {
              "lon": -0.13,
              "lat": 51.51
            },
            "weather": [{
              "id": 300,
              "main": "Drizzle",
              "description": "light intensity drizzle",
              "icon": "09d"
            }],
            "base": "stations",
            "main": {
              "temp": 280.32,
              "pressure": 1012,
              "humidity": 81,
              "temp_min": 279.15,
              "temp_max": 281.15
            },
            "visibility": 10000,
            "wind": {
              "speed": 4.1,
              "deg": 80
            },
            "clouds": {
              "all": 90
            },
            "dt": 1485789600,
            "sys": {
              "type": 1,
              "id": 5091,
              "message": 0.0103,
              "country": "GB",
              "sunrise": 1485762037,
              "sunset": 1485794875
            },
            "id": 2643743,
            "name": "London",
            "cod": 200
          },
          tz: {
            "status": "OK",
            "message": "",
            "countryCode": "GB",
            "countryName": "United Kingdom",
            "zoneName": "Europe/London",
            "abbreviation": "GMT",
            "gmtOffset": 16300,
            "dst": "0",
            "zoneStart": 1540688400,
            "zoneEnd": 1553994000,
            "nextAbbreviation": "BST",
            "timestamp": 1540943311,
            "formatted": "2018-10-30 23:48:31"
          }
        }
      })
    ).toEqual(
      {
        city: 'London',
        country: 'GB',
        hours: 19,
        temperature: 280,
        wind: 4.1,
        clouds: 90,
        rain: 0,
        snow: 0
      }
    )
  })
})
