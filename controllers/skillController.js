const express = require('express');

const skills = require('../models/skill');
const router = express.Router();

router.get('/getskills', async (req, res) => {
    try {
        const Skills = await skills.find();
        res.status(200).json(Skills);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/addskill', async (req, res) => {
    try {
        const addedSkill = await skills.create(req.body);
        res.status(201).json(addedSkill);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put('/updateskill/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const updatedSkill = await skills.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/deleteskill/:id', async (req, res) => {
    try {
        const deletedSkill = await skills.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted project successfully", deletedSkill);
    } catch (error) {
        res.status(500).json(error);
        
    }
})

module.exports = router;