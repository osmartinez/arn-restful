var config = {
    development: {
        database: {
            server: '192.168.0.109',
            database: 'SistemaGlobalPRE',
            user: 'sa',
            password: 'Oeseceaerre2',
            port: 1433,
            options:{
                enableArithAbort:false
            }
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        //db connection settings
        database: {
            server: 'sql01',
            database: 'SistemaGlobalPRE',
            user: 'sa',
            password: 'Arneplant20',
            port: 1433,
            options:{
                enableArithAbort:false
            }
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    }
};
module.exports = config;