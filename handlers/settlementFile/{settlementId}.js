'use strict';

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
    get: async function GetSettlementFilesBySettlementID(req, h) {
        const { logger, db } = req.server.app;
        try {
            return await db.getSettlementFilesBySettlementId(req.params.settlementId);
        } catch (e) {
            return h.response({ message: 'Unhandled server error', code: 1000 }).code(500);
        }
    }
};
