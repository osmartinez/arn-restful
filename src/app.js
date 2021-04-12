

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config')
const morgan = require('morgan')
const cors = require('cors')
const env = process.env.NODE_ENV || 'production';
const port = process.env.port || config[env].server.port
const mongoose = require('mongoose')
require('console-stamp')(console, 'dd/mm/yyyy HH:MM:ss');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))

// conexion db nosql
mongoose.connect('mongodb://' + config[env].nosql_database.host + '/' + config[env].nosql_database.name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const router = require('./routes')();
app.use('/api', router);

app.listen(port, () => {
    console.log(`[${env}] REST service up and running on port ${port}!`);
});