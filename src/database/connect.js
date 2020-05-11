const sql = require('mssql')
var env = process.env.NODE_ENV || 'development';
var config = require('../config')[env].database;
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log(`[${env}] Connected to database`)
    return pool
  })
  .catch(err => console.error('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}