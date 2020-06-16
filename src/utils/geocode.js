const request = require('request');

const geoCode = (address, callback) => {
    const geoLocationurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3VuZWV0amVuYSIsImEiOiJja2I3ZzNtaTkwNWZvMnp0b28xa3NkamNpIn0.MT7wE2e0jpzdZFO5pqQ4zg&limit=1';

    request({
        url: geoLocationurl,
        json: true
    }, (error, {
        body
    } = {}) => {
        if (error) {
            callback("Unable to connect to internet !", undefined);
        } else if (body.features.length === 0) {
            console.log("Improper location parameter !");
        } else {
            var longitude = body.features[0].center[0]; //to be checked
            var latitude = body.features[0].center[1];
            var location = body.features[0].place_name;

            callback(undefined, {
                latitude,
                longitude,
                location

            });
        }

    })

}

module.exports = geoCode;