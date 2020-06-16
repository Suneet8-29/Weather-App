const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const weatherStackurl = 'http://api.weatherstack.com/current?access_key=5d4b2f2b2651d3785ce8f4ccec0a877e&query=' + latitude + ',' + longitude;

    request({
        url: weatherStackurl,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback("Unable to connect to the internet !");
        } else if (body.error) {
            callback(body.error.info);
        } else {
            var data = body;
            callback(undefined, "The temperature is : " + data.current.temperature + " feels like : " + data.current.feelslike);
        }
    })


}

module.exports = forecast;