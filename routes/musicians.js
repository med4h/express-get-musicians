const router = express.Router();
const express = require("express");
const Musician = require("../modles.Musician.js");
const { check, validationResult } = require("express-validator")

app.get('/', async (req, res) => {
    const musicians = await Musician.findAll();
    (res.json(musicians));
})

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const musiciansId = await Musician.findByPk(id);
    res.json(musiciansId);
})

app.post("/", 
    [
        check("name").not().isEmpty(),
        check("instrument").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({errors: errors.array()})
        }
        const musician = await Musician.create(req.body);
        res.json(musician);
})

app.put('/:id', async (req, res) => {
    const updatedMusic = await Musician.update(req.body, {where: { id: req.params.id}});
    res.json(updatedMusic);
})

app.delete("/:id", async (req, res) => {
    const deleteMusic = await Musician.destroy({where: {id: req.params.id}});
    res.json(deleteMusic);
})

module.exports = router;