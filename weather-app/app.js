const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode(process.argv[2], (error, {latitude, longitude, location}) => {
  if (process.argv[2] == undefined) {
    return console.log(error);
  }
  if (error) {
    return console.log('Error', error)
  } 
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error)
    }
    console.log(`The location of the report is ${location}`)
    console.log(forecastData)
  })
})