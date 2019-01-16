'use strict';

const Hapi = require('hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');
const Database = require('@internal/model').database;
const config = require('./config/config');
const Good = require('good');

const init = async function(db, logger = () => {}) {
    const server = new Hapi.Server({
        ...config.server,
        host: config.server.address
    });

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
            includes: {
                request: ['headers', 'payload'],
                response: ['headers', 'payload']
            },
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

    Object.assign(server.app, { db, logger });
    server.app.db = db;

    //add a health endpoint on /
    server.route({
        method: 'GET',
        path: '/',
        handler: async (req, h) => {
            if (!(await db.isConnected())) {
                return h.response({
                    statusCode: 500,
                    error: 'Internal Server Error',
                    message: 'Database not connected' }).code(500);
            }
            return h.response().code(200);
        }
    });

    server.ext('onRequest', function(req, h) {
        logger('NEW REQUEST');
        logger(req.method.toUpperCase(), req.path);
        logger('request path', req.path);
        logger('request method', req.method);
        // TODO: has the payload been assigned at this point?
        logger('request payload', req.payload);
        logger('request headers', req.headers);
        return h.continue;
    });

    server.ext('onPreResponse', function(req, h) {
        logger('SENDING RESPONSE');
        logger('response', req.response);
        logger('response code', req.response.statusCode);
        // logger('response payload', req.response.);
        logger('response headers', req.response.headers);
        return h.continue;
    });

    await server.start();

    return server;
};

if (require.main === module) {
    (async () => {
        const logger = (...args) => { console.log(`[${(new Date()).toISOString()}]`, ...args); };
        const db = new Database(config.database, { logger });
        await db.connect();
        init(db, logger).then((server) => {
            server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

            server.app.logger(`Server running on ${server.info.host}:${server.info.port}`);
            server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
        });
    })();
} else {
    module.exports = { init };
}
