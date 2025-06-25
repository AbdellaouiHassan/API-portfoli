const express = require('express');
const mongoose = require('mongoose');

const Users = require('./controllers/userController');
const Projects = require('./controllers/projectController');
const Skills = require('./controllers/skillController')
const Contacts = require('./controllers/contactController') 


const app = express();
app.use(express.json()); 
const port = 3000

mongoose.connect('mongodb://localhost:27017/portfolioDB').then(()=>{
  console.log("connected to mongo DB");
}).catch( err =>{
  console.log("error connecting to mongo DB", err);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use('/users', Users);
app.use('/projects', Projects);
app.use('/skills', Skills);
app.use('/contacts', Contacts);


