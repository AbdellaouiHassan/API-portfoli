const express = require('express');

const contacts = require('../models/contact');
const router = express.Router();


router.get('/getcontacts', async (req, res) => {
    try {
        const Contacts = await contacts.find();
        res.status(200).json(Contacts);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/addcontact', async (req, res) => {
    try {
        const addedContact = await contacts.create(req.body);
        res.status(201).json(addedContact);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.put('/updatecontact/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const updatedContact = await contacts.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/deletecontact/:id', async (req, res) => {
    try {
        const deletedContact = await contacts.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted project successfully", deletedContact);
    } catch (error) {
        res.status(500).json(error);
        
    }
})



module.exports = router;