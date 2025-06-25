const mongoose = require("mongoose");

const pojectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        reqired: false, 
    },

    postedAt:{
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("project", pojectSchema);