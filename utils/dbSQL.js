const pg = require('pg');
require('dotenv').config()
const ClientClass = pg.Client
const pgUrl = "postgres://asmlztcc:m_gSxwvBV_YOoJw_bbWfGRjYY6J5i8MY@tyke.db.elephantsql.com/asmlztcc"
const client = new ClientClass(pgUrl)

module.exports=client;