const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const registerRoutes = require('./routes/register');

const celebrate = require('celebrate');

//
// MIDDLEWARES
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(helmet());

//
// ROUTES
//
app.use('/register', registerRoutes);

//
// ERROR HANDLING
//
app.use((err, req, res, next) => {
  if (celebrate.isCelebrate(err)) {
    res.status(500).json({ message: err.message });
  } else {
    console.log(err);
    statusCode = 500 || err.statusCode;
    res.status(err.statusCode).json({ message: err });
  }
});

//
// START
//
app.listen(8080);

module.exports = app;
