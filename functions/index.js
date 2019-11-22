const functions = require('firebase-functions');
const rp = require('request-promise');

const API_KEY = process.env.API_KEY;

exports.geocodeAddress = functions.https.onRequest(async(req, res) => {

    const address = req.query.address;
    const options = {
        uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`,
        json: true
    };

    rp(options)
        .then(function(data) {
            const lat = data.results[0].geometry.location.lat;
            const lng = data.results[0].geometry.location.lng;
            res.status(200).send([lat, lng]);
        })
        .catch(function(err) {
        	res.status(500).send(err);
        });

});