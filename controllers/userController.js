const express = require('express');

const users = require('../models/user');
const router = express.Router();

router.get('/getusers', async (req, res)=>{
    try {
        const Users = await users.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/adduser', async (req, res) =>{
    try {
        const postedUser = await users.create(req.body)
        res.status(201).json(postedUser);
    } catch (error) {
        res.status(500).json(error);
        console.log('error while adding user', error);
        
    }
})


router.get('/getuser/:id', async (req, res) =>{
    
    try {
        const User = await users.findById(req.params.id);
        res.status(200).json(User);

    } catch (error) {
        res.status(500).json(error);
        console.log('error while getting user', error);
    }
})


router.put('/updateuser/:id', async (req, res) =>{
    const { id } = req.params;
     
    try {
        const updatedUser = await users.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
        
    }
})


router.delete('/deleteuser/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const deleteduser = await users.findByIdAndDelete(id);
        res.status(200).json(deleteduser, "deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
} )


module.exports = router;