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

var searchText = document.querySelector('#searchText');
var dataLocation = document.querySelector('#dataLocation');
var dataForecast = document.querySelector('#dataForecast');
var btnSearchCall = document.getElementById('btnSearch');
const asyncf = async (dataLocation, dataForecast, searchText) => {
    try {
        dataForecast.textContent = "";
        dataLocation.textContent = "Loading....";
        alert(searchText.value);
        var response = await fetch('/weather?search=' + searchText.value);
        var result = await response.json();

        dataLocation.textContent = "Location : " + result.location;
        dataForecast.textContent = "Forecast : " + result.forecast;
    } catch (error) {
        dataLocation.textContent = error;
    }


}


btnSearchCall.addEventListener('click', (e) => {
    e.preventDefault();
    asyncf(dataLocation, dataForecast, searchText);

})