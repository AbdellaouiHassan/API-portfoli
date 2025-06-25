const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        reqired: true, 
    },

    sentAt:{
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model("contact", contactSchema);