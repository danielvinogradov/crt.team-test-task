const express = require('express');
const cors = require('cors');

const indexRouter = require('./routes/index.router');
const adsRouter = require('./routes/ads.router');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/ads', adsRouter);

app.use(express.static('public'));

app.listen(port);