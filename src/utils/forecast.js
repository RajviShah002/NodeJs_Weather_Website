const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =  'http://api.weatherstack.com/current?access_key=b978ac217c93e09f5f3c634dd9e9a987&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out and feels like ' + body.current.feelslike + ' degrees out. Currently there is ' + body.current.precip + ' % chances of rain.')
        }
    })
}

module.exports = forecast