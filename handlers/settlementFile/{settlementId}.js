'use strict';

const Boom = require('boom');

/**
 * Operations on /settlementFile/{settlementId}
 */
module.exports = {
    /**
     * summary: GetSettlementFilesBySettlementID
     * description: Get a settlement file by ID.
     * parameters: accept, settlementId
     * produces: 
     * responses: 202, 400, 401, 403, 404, 405, 406, 501, 503
     */
    get: function GetSettlementFilesBySettlementID(request, h) {
        return Boom.notImplemented();
    }
};
