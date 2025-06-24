const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    Title: {
        type: String,
        required: true,
    },

    drscription:{
        type: String,
        required: false,
    },
})