const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")
const router = require('../routes/musicians');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/musicians', router);
 
module.exports = app;