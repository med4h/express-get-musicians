const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll();
    (res.json(musicians));
})

app.get('/musicians/:id', async (req, res) => {
    const id = req.params.id;
    const musiciansId = await Musician.findByPk(id);
    res.json(musiciansId);
})

module.exports = app;