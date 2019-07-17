'use strict';

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
        const { logger, db } = req.server.app;
        let { settlementId, settlementFile, source } = req.payload;
        // swagger 2.0 doesn't allow nullable data type so sending enpty string and storing as null
        source = source === '' ? null : source; 
        try {
            return await db.saveSettlementFile({ settlementId, settlementFile, source });
            // return h.response({ message: 'Unhandled server error', code: 1000 }).code(500);
        } catch (e) {
            logger(e);
            return h.response({ message: 'Unhandled server error', code: 1000 }).code(500);
        }
    }
};
