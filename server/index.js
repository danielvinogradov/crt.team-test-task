const express = require('express');

const indexRouter = require('./routes/index.router');
const adsRouter = require('./routes/ads.router');
const likesRouter = require('./routes/likes.router');

const app = express();
const port = 3000;

app.use('/', indexRouter);
app.use('/ads', adsRouter);
app.use('/likes', likesRouter);

app.use(express.static('public'));

app.listen(port);