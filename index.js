const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/portfolioDB').then(()=>{
  console.log("connected to mongo DB");
}).catch( err =>{
  console.log("error connecting to mongo DB", err);
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})