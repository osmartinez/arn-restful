var config = {
    development: {
        database: {
            server: 'localhost',
            authentication: {
                type: 'default',
                options: {
                    userName: 'sa',
                    password: 'Oeseceaerre2'
                }
            },
            options: {
                database: 'SistemaGlobalPRE',
                rowCollectionOnDone: true,
                useColumnNames: false,
                trustServerCertificate: true,
            }
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '8080'
        }
    },
    production: {
        //db connection settings
        database: {
            server: 'SQL01',
            authentication: {
                type: 'default',
                options: {
                    userName: 'sa',
                    password: 'Arneplant20'
                }
            },
            options: {
                database: 'SistemaGlobalPRE',
                rowCollectionOnDone: true,
                useColumnNames: false,
                trustServerCertificate: true,
            }
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '8081'
        }
    }
};
module.exports = config;