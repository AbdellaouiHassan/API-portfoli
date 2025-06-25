const express = require('express');

const projects = require('../models/project');
const router = express.Router();


router.get('/getprojects', async (req, res) => {
    try {
        const Projects = await projects.find();
        res.status(200).json(Projects);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/addproject', async (req, res) => {
    try {
        const addedProject = await projects.create(req.body);
        res.status(201).json(addedProject);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put('/updateproject/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const updatedProject = await projects.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/deleteproject/:id', async (req, res) => {
    try {
        const deletedProject = await project.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted project successfully", deletedProject);
    } catch (error) {
        res.status(500).json(error);
        
    }
})



module.exports = router;