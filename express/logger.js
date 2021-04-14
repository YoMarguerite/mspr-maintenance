const log4js = require('log4js');

let logger;

const loggerConfiguration = {
    appenders: {
        out: { type: 'stdout' },

        LOG: { type: 'file', filename: 'log/server.log' },
        TEST: { type: 'file', filename: 'log/server.log' }
    },
    categories: {
        default: { appenders: ['LOG', 'TEST', 'out'], level: 'debug' }
    }
};

const init = () => log4js.configure(loggerConfiguration);

const getLogger = () => {
    logger = log4js.getLogger('SERVER');
    logger.level = 'debug';
    return logger;
};

module.exports = {
    getLogger,
    init
};