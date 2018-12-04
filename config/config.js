// (C)2018 ModusBox Inc.
'use strict';

const defEnv = (key, def) => (key in process.env) ? process.env[key] : def;

module.exports = {
    server: {
        port: defEnv('LISTEN_PORT', 3000),
        address: defEnv('LISTEN_ADDRESS', '0.0.0.0')
    },
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
            min: defEnv('DB_POOL_MINSIZE', 10),
            max: defEnv('DB_POOL_MAXSIZE', 10)
        }
    }
};
