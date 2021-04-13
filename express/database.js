const { Client } = require('pg');
const settings = require('./settings');

const clientBased = new Client({
    user: settings.postgresql.user,
    host: settings.postgresql.host,
    database: settings.postgresql.database.based,
    password: settings.postgresql.password,
    port: settings.postgresql.port,
});

const clientPorte = new Client({
    user: settings.postgresql.user,
    host: settings.postgresql.host,
    database: settings.postgresql.database.porte,
    password: settings.postgresql.password,
    port: settings.postgresql.port,
});

const clientSedatif = new Client({
    user: settings.postgresql.user,
    host: settings.postgresql.host,
    database: settings.postgresql.database.sedatif,
    password: settings.postgresql.password,
    port: settings.postgresql.port,
});

module.exports = {clientBased, clientPorte, clientSedatif};