// (C)2018 ModusBox Inc.
'use strict';

const defEnv = (key, def) => (key in process.env) ? process.env[key] : def;

module.exports = {
    dfspConf: JSON.parse(process.env['DFSP_CONF']),
    database: {
        client: defEnv('DB_PROTOCOL', 'mysql'),
        connection: {
            host: defEnv('DB_HOST', 'db'),
            port: defEnv('DB_PORT', '3306'),
            user: defEnv('DB_USER', 'casa'),
            password: defEnv('DB_PASSWORD', 'casa'),
            database: defEnv('DB_SCHEMA', 'central_ledger')
        },
        pool: {
            min: process.env['DB_POOL_MINSIZE'] || 10,
            max: process.env['DB_POOL_MAXSIZE'] || 10
        }
    }
};
