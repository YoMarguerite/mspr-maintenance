const logger = require('../logger').getLogger('SERVER');
const models = require('../model/based.js');


exports.getEclairage = async(date) => {
    try {

        return await models.getEclairage(date);
    } catch (err) {
        
        logger.error(err.message);
        return err;
    }
};