const pg = require('pg');
require('dotenv').config()
const client = new pg.Client("postgres://bgvfwnly:ZVnvAUmOe28gU52Hb1nKI1h6CtlXZLy1@lucky.db.elephantsql.com/bgvfwnly")

client.connect(function(err){
    if(err){
        return console.error('could not connect db',err)
    }
    else{
        return console.error('connected to db')
    }
})

module.exports=client;