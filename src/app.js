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

app.post("/musicians", async (req, res) => {
    const musician = await Musician.create(req.body);
    res.json(musician);
})

app.put('/musicians/:id', async (req, res) => {
    const updatedMusic = await Musician.update(req.body, {where: { id: req.params.id}});
    res.json(updatedMusic);
})

app.delete("/musicians/:id", async (req, res) => {
    const deleteMusic = await Musician.destroy({where: {id: req.params.id}});
    res.json(deleteMusic);
})
module.exports = app;