'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /settlementFile/
 */
module.exports = {
    /**
     * summary: PostSettlementFile
     * description: Save a new settlement file.
     * parameters: body, content-type, accept
     * produces: 
     * responses: 201, 400, 401, 403, 404, 405, 406, 501, 503
     * operationId: PostSettlementFile
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '201'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '400'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '401'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '403'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '404'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '405'
            }, callback);
        },
        406: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '406'
            }, callback);
        },
        501: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '501'
            }, callback);
        },
        503: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/settlementFile/',
                operation: 'post',
                response: '503'
            }, callback);
        }
    }
};
