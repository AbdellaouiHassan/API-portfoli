const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    about: {
        type: String,
        required: false,
    },

    status:{
        type: String,
        required: true,
    },

    phone_number:{
        type: Number,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    github_link:{
        type: String,
        requred: false,
    },

    likedin_link:{
        type: String,
        requred: false,
    },
})
 

module.exports = mongoose.model('user', userSchema);