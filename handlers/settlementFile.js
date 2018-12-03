'use strict';

const Boom = require('boom');

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
     */
    post: function PostSettlementFile(request, h) {
        return Boom.notImplemented();
    }
};
