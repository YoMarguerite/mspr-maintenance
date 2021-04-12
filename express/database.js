const { Client } = require('pg');
const settings = require('./settings');

const client = new Client({
    user: settings.postgresql.user,
    host: settings.postgresql.host,
    database: settings.postgresql.database,
    password: settings.postgresql.password,
    port: settings.postgresql.port,
});

client.connect();

module.exports = client;