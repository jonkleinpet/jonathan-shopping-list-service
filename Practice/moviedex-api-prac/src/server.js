'use strict';

require('dotenv').config();
const { PORT } = require('./config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const router = require('./router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption, { skip: () => NODE_ENV === 'test' }));
app.use(helmet());
app.use(cors());
app.use(router);

app.use((req, res, next) => {
  const apiKey = process.env.API_KEY;
  const reqKey = req.get('Authorization');
  if (!reqKey || reqKey.split(' ')[1] !== apiKey) {
    return res.status(401).json({ error: 'Unauthorized Request' });
  }
  next();
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
