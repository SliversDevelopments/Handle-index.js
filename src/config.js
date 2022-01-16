module.exports = {
    token: process.env.TOKEN || "OTA4NzY3NzA3NDIyNDIxMDMy.YY6h4Q.nS7q5IzNT1BLdXXXOf5MKpSHRyU",  // your bot token
    prefix: process.env.PREFIX || "m?", // bot prefix
    ownerID: process.env.OWNERID || "880089687392419891", //your discord id
    SpotifyID: process.env.SPOTIFYID || "bf5ee2a72bae40ffadc71a47280e5ff9", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "053469ffeb3844079fab734ebf3090c2", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb+srv://RoshanGamer:public@cluster0.kyoy7.mongodb.net/Public1?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "929483253906309130", // channel id for guild create and delete logs 

    nodes: {

      host: "disbotlistlavalink.ml",
      id: "local",
      port: 443,
      password: "LAVA",
      secure: true
    
    },
 
}
