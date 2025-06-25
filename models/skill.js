const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        reqired: false, 
    },

    postedAt:{
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("skill", skillSchema);