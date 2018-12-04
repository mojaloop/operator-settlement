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
    post: async function PostSettlementFile(req, h) {
        console.log('HASFKLjAFJASKLFJALK');
        const { logger, db } = req.server.app;
        logger('ENTER');
        try {
            console.log(req.body);
            console.log(req.params);
            console.log(req.payload);
            return await req.server.app.db.saveSettlementFile(req.payload);
            // return h.response({ message: 'Unhandled server error', code: 1000 }).code(500);
        } catch (e) {
            logger(e);
            return h.response({ message: 'Unhandled server error', code: 1000 }).code(500);
        }
    }
};
