var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const config = require('./config')
var env = process.env.NODE_ENV || 'development';
env = env.trim()
var port = process.env.port || config[env].server.port

app.listen(port, () => {
    console.log(`[${env}] REST service up and running!`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = require('./routes')();
 
app.use('/api', router);