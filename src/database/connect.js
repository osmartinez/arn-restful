var Connection = require('tedious').Connection;

var env = process.env.NODE_ENV || 'development';
env = env.trim()
var config = require('../config')[env];
var connection = new Connection(config.database);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`[${env}] Connected to database`);
    }
});
module.exports = connection;