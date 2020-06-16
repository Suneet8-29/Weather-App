console.log("Cool !! Its working");

// var x = fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/cuttack.json?access_token=pk.eyJ1Ijoic3VuZWV0amVuYSIsImEiOiJja2I3ZzNtaTkwNWZvMnp0b28xa3NkamNpIn0.MT7wE2e0jpzdZFO5pqQ4zg&limit=1');


// x.then(
//     (response) => {
//         return response.json();
//     },
//     (reject) => {

//     }
// ).then((data) => {
//     console.log(data.features[0]);
// })

const asyncf = async () => {
    try {
        var response = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad.json?access_token=pk.eyJ1Ijoic3VuZWV0amVuYSIsImEiOiJja2I3ZzNtaTkwNWZvMnp0b28xa3NkamNpIn0.MT7wE2e0jpzdZFO5pqQ4zg&limit=1');
        var data = await response.json();

        console.log(data.features[0]);
    } catch (error) {
        console.log(error);
    }


}

asyncf();