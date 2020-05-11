const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config')
const morgan = require('morgan')
const env = process.env.NODE_ENV || 'development';
const port = process.env.port || config[env].server.port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))
const router = require('./routes')();
app.use('/api', router);

app.listen(port, () => {
    console.log(`[${env}] REST service up and running on port ${port}!`);
});