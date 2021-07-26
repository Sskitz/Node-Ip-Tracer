// the Modules
const fs = require("fs") 
const superagent = require('superagent');
const prompt = require('prompt-sync')();

// The Scripting
const args = prompt('[+] Enter the Ip Adress: ');

superagent.get(`http://ip-api.com/json/${args}`).then(r => {
var string = JSON.stringify(r.body)
console.log(`ASN: ${r.body.as}`)
console.log(`Contury: ${r.body.country}`)
console.log(`Region: ${r.body.regionName}`)
console.log(`CITY: ${r.body.city}`)
console.log(`Zip: ${r.body.zip}`)
console.log(`Lat: ${r.body.lat}`)
console.log(`Lon: ${r.body.lon}`)
console.log(`ISP: ${r.body.isp}`)
console.log(`Timezone: ${r.body.timezone}`)
})
// Stiizzy Was Here :)