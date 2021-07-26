// the modules
var geoip = require('geoip-lite');
superagent.get(`http://ip-api.com/json/${args}`).then(r => {
                                var string = JSON.stringify(r.body)
                                let Geo = new Discord.RichEmbed()
                                    .setTimestamp()
                                    .setThumbnail(`https://cdn.discordapp.com/emojis/810658400434126880.png?v=1`)
                                    .setTitle(`**GeoIP Lookup**`)
                                    .setDescription(`**Looked Up IP**: ${args}
**ASN:** ${r.body.as}
**Contury:** ${r.body.country}
**Region:** ${r.body.regionName}
**CITY:** ${r.body.city}
**Zip:** ${r.body.zip}
**Lat:** ${r.body.lat}
**Lon:** ${r.body.lon}
**ISP:** ${r.body.isp}
**Timezone:** ${r.body.timezone}
 `)
                                    .setFooter(`Provided By: ${message.author.tag}`)
                                message.author.send({
                                    embed: Geo
                                })

                            })

                        }
                        // stiizzy was here
