const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userSchema = new Schema({
    firstName = {
        type: String,
        required: true,
        min: [3, "Minimun of 3 characters required"],
        max: 20,
        trim: true
    },
    email = {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        min: 7,
        max: 50,
        trim: true
    },
    password = {
        type: String,
        required: true,
        min: [8, "Minimum 8 characters required"],
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("User", userSchema);

// Export the Example model
module.exports = User;