const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const app = express();
const port = process.env.PORT || 3000;
//defining paths for express config 
var htmlPath = path.join(__dirname, '../public');
var viewsPath = path.join(__dirname, '../template/views');
var partialPath = path.join(__dirname, '../template/partials');
app.use(express.static(htmlPath)); // Using a staic path to load data into browser from backend


//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);
//handle get request
app.get('', (req, res) => {

    res.render('index', {
        title: 'Weather',
        name: 'Suneet'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'Suneet'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'Suneet'
    })
})

app.get('/weather', (req, res) => {

    var search = req.query.search;
    if (!search) {
        return res.send({
            error: "Please enter search parameter to proceed !"
        })
    }

    geoCode(search, (error, {
        latitude,
        longitude,
        location
    } = {}) => {
        if (error) {
            return res.send(error);
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return res.send(error);
            }
            res.send({
                location,
                forecast: forecastdata
            });

        })
    })

})

app.get('/help/*', (req, res) => {
    res.render('404Error', {
        title: 'Help Error',
        name: 'Suneet',
        message: 'Help article not found !'
    });
})

app.get('*', (req, res) => {
    res.render('404Error', {
        title: 'Error',
        name: 'Suneet',
        message: 'Page Not Found !'
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port);
});