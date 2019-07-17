'use strict';

const test = require('ava');
const Server = require('../server');

// CV0-2481
test('Database failure causes health-check to fail', async function (t) {
    const db = {
        isConnected: () => false
    };
    const server = await Server.init(db);

    const options = {
        method: 'get',
        url: '/'
    };

    const response = await server.inject(options);
    t.is(response.payload, JSON.stringify({
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Database not connected' }), 'Response payload indicates internal error');
    t.is(response.statusCode, 500, 'Response status indicates internal error');
});
