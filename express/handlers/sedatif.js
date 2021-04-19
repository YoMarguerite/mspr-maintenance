const logger = require('../logger').getLogger('SERVER');
const models = require('../model/sedatif.js');


exports.getTravaux = async() => {
    try {
        return await models.getTravaux();
    } catch (err) {
        
        logger.error(err.message);
        return err;
    }
};

exports.getOuvert = async() => {
    try {
        return await models.getOuvert();
    } catch (err) {
        
        logger.error(err.message);
        return err;
    }
};