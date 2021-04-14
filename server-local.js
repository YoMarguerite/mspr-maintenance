'use strict';

const app = require('./express/server');
const settings = require('./express/settings');

app.listen(settings.api.port, () => console.log('Local app listening on port 3000 ! http://' +settings.api.host+':'+settings.api.port));
