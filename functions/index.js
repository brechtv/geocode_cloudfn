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
            const response = {
						  "latitude": data.results[0].geometry.location.lat,
						  "longitude": data.results[0].geometry.location.lng,
						  "looker": {
						    "success": true,
						    "refresh_query": true
						  }
						}


            res.status(200).send(response);
        })
        .catch(function(err) {
        	res.status(500).send(err);
        });

});