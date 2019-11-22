# Basic Cloud Function that geocodes an address via Google Maps API

Uses `request-promise` to geocode any address using Google Maps geocoder and returns lat & lng in an array.


### Deploy

`cd` into the functions dir & run:

```
gcloud functions deploy geocodeAddress --update-env-vars API_KEY=AbC123 --trigger-http --runtime nodejs8
```


### Usage

```
GET https://us-central1-brechtv-playground.cloudfunctions.net/geocodeAddress?address=harcourt+street+dublin
 // returns [53.3351656,-6.263295299999999]
```