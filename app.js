const express = require('express');
const cors = require('cors');

const index = require('./routes/index');
const reports = require('./routes/reports');

const app = express();
app.use(cors());

const port = 8333;

app.use('/', index);
app.use('/reports', reports);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
