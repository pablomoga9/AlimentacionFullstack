const pg = require('pg');
require('dotenv').config()
const client = new pg.Client(process.env.ELEPHANT)

client.connect(function(err){
    if(err){
        return console.error('could not connect db',err)
    }
    else{
        return console.error('connected to db')
    }
})

module.exports=client;