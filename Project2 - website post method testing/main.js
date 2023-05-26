'use strict';

const port = 3000;
const app  = require('./app');

app.listen(port, () => console.log(`running on ${port}`));
