const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const index = require('./routes/index');
const reports = require('./routes/reports');

const app = express();
const port = 8333;

app.use(cors());



// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use('/', index);
app.use('/reports', reports);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server;
