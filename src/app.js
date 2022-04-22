const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const loginRouter = require('./login/login.router');
const companiesRouter = require('./companies/companies.router');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/logins", loginRouter);
app.use("/companies", companiesRouter);


module.exports = app;