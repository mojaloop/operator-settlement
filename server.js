'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Database = require('@internal/model').database;
const config = require('./config/config');
const Good = require('good');

const init = async function() {
    const server = new Hapi.Server({
        ...config.server,
        host: config.server.address
    });
    const logger = console.log.bind(console);

    await server.register([{
        plugin: HapiOpenAPI,
        options: {
            // outputvalidation: true,
            api: Path.resolve('./config/swagger.json'),
            handlers: Path.resolve('./handlers')
        }
    }, {
        plugin: Good,
        options: {
            ops: {
                interval: 1000
            },
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{ log: '*', response: '*' }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }]);

    const db = new Database(config.database, { logger });
    await db.connect();

    Object.assign(server.app, { db, logger });
    server.app.db = db;

    await server.start();

    return server;
};

init().then((server) => {
    server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

    server.app.logger(`Server running on ${server.info.host}:${server.info.port}`);
    server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
});
